<template>
    <div class="show-box" style="width: 1000px">
        <p class="show-box-title">成绩查询</p>
        <el-row>
            <el-col :offset="18" :span="6">
                <el-input placeholder="搜索" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <br>
        <el-card :body-style="{ padding: '20px' }">
            <class-course-select :course-type=0 @change-course="changeCourse"></class-course-select>
            <br>
            <div class="tag">
                <div class="row">
                    <span>任课单位： 航空工程教研室</span>
                    <span>任课教师： 刘峰</span>
                </div>
                <div class="row">
                    <span>课程名称： {{ courseInfo.courseName }}</span>
                    <span>考试日期： 2018年1月25日</span>
                    <span></span>
                </div>
                <div class="btns">
                    <div>
                        <i class="el-icon-download"></i> <span>点击下载</span>
                    </div>
                </div>
            </div>
            <br>
            <el-table :data="scoreData" style="text-align:left;">
                <el-table-column prop="student.studentNumber" label="学号"></el-table-column>
                <el-table-column prop="student.studentName" label="姓名"></el-table-column>
                <el-table-column prop="score" label="成绩"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import ClassCourseSelect from './parts/ClassCourseSelect'
import api from '@/api'

export default {
    name: 'ScoreQuery',
    components: {ClassCourseSelect},
    data() {
        return {
            showOp: false,
            courseInfo: {},
            classInfo: {},
            scoreData: []
        }
    },
    methods: {
        changeCourse(id) {
            this.courseId = id
            this.getCourseScore(id)
        },
        getCourseScore(id) {
            let that = this
            console.log(id)
            api.score.getCourseScore(id).then(function(resp) {
                if(resp.data.code = 200) {
                    if(resp.data.data.length > 0) {
                        that.courseInfo = resp.data.data[0].course
                        that.classInfo = resp.data.data[0].stuClass
                        console.log(resp.data.data)
                    }
                    that.scoreData = resp.data.data
                }
            }).catch(function(err) {
                console.log(err)
            })
        }
    }
}
</script>


<style scoped>
.tag {
    width:700px;
    padding: 10px 20px;
    border: 1px solid #ddd;
}
.tag .row {
    display: flex;
    text-align: left;
}
.tag .row span {
    width: 200px;
    height: 40px;
    line-height: 40px; 
    font-size: 14px;
    color: #888;
}
.btns {
    display: flex;
    margin: 0;
    font-size: 14px;
    color: #1890FF;
    justify-content: flex-end;
}
.btns div {
    cursor: pointer;
    margin-right: 30px;
}
</style>