<template>
    <div class="show-box">
        <p class="show-box-title">147成绩</p>
        <class-course-select :course-type=1 @change-course="changeCourse"></class-course-select>
        <br/>
        <el-card :body-style="{ padding: '40px 80px' }">
            <h4 style="text-align: left">课程组成</h4>
            <el-table :data="courseInfo.childCourses" style="width: 100%; text-align: left">
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column label="课程名" prop="courseName"></el-table-column>
                <el-table-column label="教师" prop="teacher.teacherName"></el-table-column>
                <el-table-column label="考试日期"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-tag>已考</el-tag>                        
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button>下载成绩单</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import ClassCourseSelect from './parts/ClassCourseSelect'
import api from '@/api'

export default {
    name: 'ScoreCollection',
    components: {ClassCourseSelect},
    data() {
        return {
            courseId: '',
            courseInfo: {},
            classInfo: {},
            childCourses: [],
            dialogVisible: false
       }
    },
    methods: {
        setCourse: function() {
            this.dialogVisible = true
        },
        changeCourse(id) {
            this.courseId = id
            this.getCourseScore(id)
        },
        getCourseScore(id) {
            let that = this
            console.log(id)
            api.course.getZyCourse(id).then(function(resp) {
                that.courseInfo = resp.data.data
                console.log(that.childCourses)
            }).catch(function(err) {
                console.log(err)
            })
        }
    }
    
}
</script>