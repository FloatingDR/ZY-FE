<!--
Class-Course-Link Selector
-->
<template>
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
                    :key="item.course.courseId"
                    :label="item.course.courseName"
                    :value="item.classCourseId">
                </el-option>
            </el-select>
        </el-col>
    </el-row>
</template>

<script>
import api from '@/api'
import {Loading} from 'element-ui'

export default {
    name: 'ScoreEdit',
    props: ['courseType'],
    data() {
        return {
            v_course: null,     // 班级-课程连接id
            v_class: null,
            v_courseId: null,
            v_classId: null,
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
            that.getCoursesByClass(value)
        },
        getCoursesByClass(classid) {
            let that = this
            if (that.courseType == 0) {
                api.course.getClassCourseLinks(classid).then(function (resp) {
                    console.log(resp.data)
                    that.courses = resp.data.data
                }).catch(function (err) {
                    console.log(err)
                })
            } else {
                console.log("zy")
                api.course.getZyClassCourseLinks(classid).then(function (resp) {
                    console.log(resp.data)
                    that.courses = resp.data.data
                }).catch(function (err) {
                    console.log(err)
                })
            }
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
            this.$emit('change-course', value)
        }
    }
}
</script>