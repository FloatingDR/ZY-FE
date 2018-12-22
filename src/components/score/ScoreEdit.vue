<template>
    <div class="show-box">
        <p class="show-box-title">成绩导入</p>
        <el-alert
            class="warn"
            title="点击提交按钮进入下一阶段，无法修改！"
            type="warning"
            show-icon>
        </el-alert>
        
        <el-card>
            <el-row type="flex" >
                <el-col :span="24" >
                    <el-steps :active="2" >
                        <el-step title="教师录入" description="刘峰 2017-12-12  12:32"></el-step>
                        <el-step title="主任初审" description=""></el-step>
                        <el-step title="院长复审" description=""></el-step>
                        <el-step title="完成" description=""></el-step>
                    </el-steps>
                </el-col>
            </el-row>
        </el-card>
        <br><br>
        <el-row>
            <el-col :span="3">
                <el-select v-model="v_class" placeholder="请选择班级" @change="changeClass">
                    <el-option v-for="item in stuclasses"
                        :key="item.classId"
                        :label="item.className"
                        :value="item.classId">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3" :offset="1">
                <el-select v-model="v_course" placeholder="请选择课程" @change="changeCourse">
                    <el-option v-for="item in courses"
                        :key="item.courseId"
                        :label="item.courseName"
                        :value="item.courseId">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <br>

        <el-alert
            class="warn"
            title="请选择班级和课程后下载对应模板"
            type="info"
            show-icon>
        </el-alert>
        <el-row type="flex">
            <el-card class="tpl" :body-style="{padding: '10px 10px 10px 20px'}">
                <el-row>
                    <el-col :span="16">
                        <div class="tpl-tit">
                            <span>成绩信息</span>
                            <span>/</span>
                            <span>成绩导入</span>
                            <span>/</span>
                            <span class="act">模板下载</span>
                        </div>
                        <h4>{{ score_tag }}</h4>
                        <div class="desc">下载模板到本地编辑后上传。</div>
                        <div class="btns">
                            <div>
                                <i class="el-icon-download"></i> <a @click="downloadExport">点击下载</a>
                            </div>
                            <div>
                                <i class="el-icon-document"></i> <span>在线预览</span>
                            </div>
                            <div>
                                <i class="el-icon-info"></i> <span>查看帮助</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img src="../../assets/tplbg.png" height="120">
                    </el-col>
                </el-row>
            </el-card>
            <el-upload class="upload-demoLink" drag action="http://127.0.0.1:8008/import/upload"
                :on-success="importSuccess"
                :on-error="importError">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传xls,xlsx文件</div>
            </el-upload>
        </el-row>
    </div>
</template>

<script>
import api from '@/api'
import {Loading} from 'element-ui'

export default {
    name: 'ScoreEdit',
    data() {
        return {
            v_course: null,     // 班级-课程连接id
            v_class: null,
            v_courseId: null,
            v_classId: null,
            score_tag: '请选择',
            export_link: '#',
            courses: [],
            stuclasses: []
        }
    },
    mounted(){
        this.getStuClasses()
    },
    methods: {
        changeClass(value) {
            let that = this
            console.log(value)
            that.getCoursesByClass(value)
        },
        getCoursesByClass(classid) {
            let that = this
            api.course.getCoursesByClass(classid).then(function (resp) {
                console.log(resp.data)
                that.courses = resp.data.data
            }).catch(function (err) {
                console.log(err)
            })
        },
        getStuClasses() {
            let that = this
            api.info.getClasses().then(function (resp) {
                that.stuclasses = resp.data.data
            }).catch(function (err) {
                console.log(err)
            })
        },
        changeCourse(value) {
            let that = this
            that.score_tag = that.courses.find(course => course.courseId == value)['courseName']
            console.log(value)
        },
        downloadExport() {
            if (!this.v_course || !this.v_class) {
                return this.$message.warning("请先选择课程和班级")
            }
            let href = "http://127.0.0.1:8008/export/course_score?courseid=" + this.v_course + "&classid=" + this.v_class;
            window.open(href)
        },
        importSuccess(resp, file, files) {
            let that = this
            if(resp.code == 200) {
                that.importScore(resp.data)
            } else {
                that.$message.warning("上传失败")    
            }
        },
        importError(err, file, files) {
            let that = this
            that.$message.warning("上传失败")
        },  
        importScore(file) {
            let that = this
            let loadingInstance = Loading.service({
                fullscreen: true,
                text: '导入中，请稍后'
            })
            api.file.importScore(file).then(function (response) {
                loadingInstance.close()
                if(response.data.code > 0) {
                    that.$message.success("导入成功")
                } else {
                    that.$message.warning("导入失败")   
                }
            }).catch(function (err) {
                loadingInstance.close()
                that.$message.warning("导入失败")   
            })  
        },

    }
}
</script>


<style scoped>
.el-icon-upload2{
    color: #666;
    font-size: 50px;
    height: 100px;
    line-height: 100px;
    padding-top: 20px;
}
.el-upload__text{
    color: #999;
}
.tpl {
    text-align: left;
    width: 600px;
    min-width: 600px;
    height: 160px;
    margin-right: 20px;
}
.tpl img {
    margin-top: 10px;
}
.tpl .tpl-tit {
    font-size: 14px;
    color: #999;
}
.tpl .tpl-tit span{
    display: inline-block;
    margin-right: 6px;
}
.tpl .tpl-tit .act {
    color: #000;
}
.tpl .desc {
    font-size: 14px;
    color: #888;
}
.tpl .btns {
    display: flex;
    margin-top: 18px;
    font-size: 14px;
    color: #1890FF;
}
.tpl .btns div {
    cursor: pointer;
    margin-right: 30px;
}
.tpl .btns a {
    color: #1890FF;
    text-decoration: none;
}
</style>