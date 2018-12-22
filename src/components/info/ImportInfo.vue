<template>
    <div class="show-box">
        <p class="show-box-title">信息导入</p>
        <br>
        <el-row>
            <el-col :span="3">
                <el-select v-model="option1" placeholder="主类别">
                    <el-option v-for="item in Object.keys(menus)"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :offset="1" :span="3">
                <el-select v-model="option2" placeholder="次类别" @change="changeTpl($event)">
                    <el-option v-for="item in menus[option1]"
                        :key="item"
                        :label="item"
                        :value="item">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        
        <br>
        <el-card class="tpl" :body-style="{padding: '10px 10px 10px 20px'}">
            <el-row>
                <el-col :span="16">
                    <div class="tpl-tit">
                        <span>{{ option1 }}</span>
                        <span>/</span>
                        <span>{{ option2 }}</span>
                        <span>/</span>
                        <span class="act">模板下载</span>
                    </div>
                    <h4> {{ option2 }}</h4>
                    <div class="desc">下载模板到本地编辑后上传。</div>
                    <div class="btns">
                        <div>
                            <i class="el-icon-download"></i> <a :href="demoLink">点击下载</a>
                        </div>
                        <div @click="showDemo = true">
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
        <br>
        <div style="text-align: left">
            <el-upload class="upload-demoLink" drag action="http://127.0.0.1:8008/import/upload"
                :on-success="importSuccess"
                :on-error="importError">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传xls,xlsx文件</div>
            </el-upload>
        </div>

        <el-dialog title="模板查看" :visible.sync="showDemo" width="80%">
            <img src="../../assets/xlsdemo.png" style="width: 100%">
        </el-dialog>
    </div>
</template>

<script>
import {Loading} from 'element-ui'
import api from '@/api'

export default {
    name: 'ImportInfo',
    data() {
        return {
            option1: '教师信息',
            option2: '外聘教师导入',
            showDemo: false,
            menus: {
                '教师信息': ['专职教师导入'],
                '学生信息': ['学生信息导入']
            },
            demoConfig: {
                '专职教师导入': 'http://127.0.0.1:8008/export/wteacher',
                '外聘教师导入': 'http://127.0.0.1:8008/export/wteacher',
                '学生信息导入': 'http://127.0.0.1:8008/export/student'
            },
            demoLink: 'http://127.0.0.1:8008/export/wteacher'
        }
    },
    methods: {
        changeTpl(data) {
            this.demoLink = this.demoConfig[data]
            console.log(this.demoLink)
        },
        importSuccess(resp, file, files) {
            let that = this
            if(resp.code == 200) {
                console.log(that.option2)
                switch (that.option2) {
                    case '专职教师导入':
                        that.importWTeacher(resp.data);
                        break;
                
                    case '外聘教师导入':
                        that.importWTeacher(resp.data);
                        break;
                    case '学生信息导入':
                        that.importStudent(resp.data);
                        break;
                }
            } else {
                that.$message.warning("上传失败")    
            }
        },
        importError(err, file, files) {
            let that = this
            that.$message.warning("上传失败")
        },
        importWTeacher(file) {
            let that = this
            let loadingInstance = Loading.service({
                fullscreen: true,
                text: '导入中，请稍后'
            })
            api.file.importWTeacher(file).then(function (response) {
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
        importStudent(file) {
            let that = this
            let loadingInstance = Loading.service({
                fullscreen: true,
                text: '导入中，请稍后'
            })
            api.file.importStudent(file).then(function (response) {
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
        }
    }
}
</script>


<style scoped>
.tabs {
    display: flex;
    justify-content: space-around;
}
.tpl {
    text-align: left;
    width: 600px;
    height: 160px;
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