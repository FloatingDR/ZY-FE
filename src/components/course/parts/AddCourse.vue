<template>
    <div>
        <el-form :model="form">
            <el-form-item label="课程名称" label-width="100px">
                <el-input auto-complete="off" v-model="addCourseForm.courseName"></el-input>
            </el-form-item>
            <el-form-item label="课程类型" label-width="100px" style="text-align: left">
                <el-select v-model="addCourseForm.courseType" @change="changeAddCourseType($event)">
                    <el-option label="普通课程" :value=0></el-option>
                    <el-option label="卓越课程" :value=1></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程老师" label-width="100px" style="text-align: left">
                    <el-tag style="margin: 0 5px;"
                        :key="index"
                        v-for="(tag,index) in addedTeachers"
                        closable
                        :disable-transitions="false"
                        @close="deleteTeacherTag(tag.teacherId)">
                        {{tag.teacherName}}
                    </el-tag>
                    <el-button class="button-new-tag" size="small" @click="showAddTeacher = !showAddTeacher">+ 老师</el-button>
            </el-form-item>
            <el-form-item v-show="showAddTeacher">
                <el-row type="flex" justify="space-around">
                    <div>
                        <el-input placeholder="关键词搜索老师" @change="searchTeacher"></el-input>
                    </div>
                    <div>
                        <el-button v-for="(item, index) in searchTeachers" :key="index"
                            @click="addTeacherTag(item.teacherId)"
                            class="button-new-tag" size="small"> + {{ item.teacherName }}</el-button>
                    </div>
                </el-row>
            </el-form-item>
            <el-form-item label="班级设置" label-width="100px" style="text-align: left">
                    <el-tag style="margin: 0 5px;"
                        :key="index"
                        v-for="(tag,index) in addedClasses"
                        closable
                        :disable-transitions="false"
                        @close="deleteClassTag(tag.classId)">
                        {{tag.className}}
                    </el-tag>
                    <el-button class="button-new-tag" size="small" @click="showAddClass = !showAddClass">+ 班级</el-button>
            </el-form-item>
            <el-form-item v-show="showAddClass">
                <el-row type="flex" justify="space-around">
                    <div>
                        <el-input placeholder="关键词搜索班级" @change="searchClass"></el-input>
                    </div>
                    <div>
                        <el-button v-for="(item, index) in searchClasses" :key="index"
                            @click="addClassTag(item.classId)"
                            class="button-new-tag" size="small"> + {{ item.className }}</el-button>
                    </div>
                </el-row>
            </el-form-item>
            <template  v-if="showZyForm">
                <el-form-item label="设置子课程" label-width="100px" style="text-align: left">
                    <el-tag style="margin: 0 5px;"
                    :key="index"
                    v-for="(tag,index) in addedSubCourses"
                    closable
                    :disable-transitions="false"
                    @close="deleteCourseTag(tag.courseId)">
                    {{tag.courseName}}
                    </el-tag>
                    <el-button class="button-new-tag" size="small" @click="showAddSubCourse = !showAddSubCourse">+ 课程</el-button>
                </el-form-item>
                <el-form-item v-show="showAddSubCourse">
                    <el-row type="flex" justify="space-around">
                        <div>
                            <el-input placeholder="关键词搜索课程" @change="searchCourse"></el-input>
                        </div>
                        <div>
                            <el-button v-for="(item, index) in searchSubCourses" :key="index"
                                @click="addCourseTag(item.courseId)"
                                class="button-new-tag" size="small"> + {{ item.courseName }}</el-button>
                        </div>
                    </el-row>
                </el-form-item>
            </template>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addCourse">提 交</el-button>
        </div>
    </div>
</template>

<script>
import api from '@/api'

export default {
    name: 'AddCourse',
    data() {
        return {
            showZyForm: false,
            searchTeachers: [],
            searchClasses: [],
            searchSubCourses: [],
            addCourseForm: {
                courseName: '',
                courseType: 0,
                teachers: new Map(),
                classes: new Map(),
                subCourses: new Map()
            },
            showAddTeacher: false,
            showAddClass: false,
            showAddSubCourse: false,
            addedClasses: [],
            addedTeachers: [],
            addedSubCourses: []
        }
    },
    methods: {
        changeAddCourseType(value) {
            if(value == 1) {
                this.showZyForm = true
            } else {
                this.showZyForm = false
            }
        },
        searchTeacher(value) {
            let that = this
            api.info.searchTeacher(value).then(function (resp) {
                if(resp.data.code == 200) {
                    that.searchTeachers = resp.data.data
                }
            })
        },
        searchClass(value) {
            let that = this
            api.info.searchClass(value).then(function (resp) {
                if(resp.data.code == 200) {
                    that.searchClasses = resp.data.data
                }
            })
        },
        searchCourse(value) {
            let that = this
            api.course.searchCourse(value).then(function (resp) {
                if(resp.data.code == 200) {
                    that.searchSubCourses = resp.data.data
                }
            })
        },
        addTeacherTag(id) {
            this.addCourseForm.teachers.set(id, this.searchTeachers.find(item => item.teacherId == id))
            this.addedTeachers = [...this.addCourseForm.teachers.values()]
        },
        addClassTag(id) {
            this.addCourseForm.classes.set(id, this.searchClasses.find(item => item.classId == id))
            this.addedClasses = [...this.addCourseForm.classes.values()]
        },
        addCourseTag(id) {
            this.addCourseForm.subCourses.set(id, this.searchSubCourses.find(item => item.courseId == id))
            this.addedSubCourses = [...this.addCourseForm.subCourses.values()]
        },
        deleteTeacherTag(id) {
            this.addCourseForm.teachers.delete(id)
            this.addedTeachers = [...this.addCourseForm.teachers.values()]
        },
        deleteClassTag(id) {
            this.addCourseForm.classes.delete(id)
            this.addedClasses = [...this.addCourseForm.classes.values()]
        },
        deleteCourseTag(id) {
            this.addCourseForm.subCourses.delete(id)
            this.addedSubCourses = [...this.addCourseForm.subCourses.values()]
        },
        addCourse() {
            let that = this
            if (this.showZyForm) {
                api.course.addZYCourse({
                    'courseName' : that.addCourseForm.courseName,
                    'teachers' : that.addedTeachers,
                    'classes': that.addedClasses,
                    'subCourses': that.addedSubCourses
                }).then(function (resp) {
                    if (resp.data.code == 200) {
                        that.$message.success("添加成功")
                    } else {
                        that.$message.warning("网络错误")
                    }
                }).catch(function (err) {
                    console.log(err)
                    that.$message.warning("网络错误")
                })
            } else {
                api.course.addCommonCourse({
                    'courseName' : that.addCourseForm.courseName,
                    'teachers' : that.addedTeachers,
                    'classes': that.addedClasses
                }).then(function (resp) {
                    if (resp.data.code == 200) {
                        that.$message.success("添加成功")
                    } else {
                        that.$message.warning("网络错误")
                    }
                }).catch(function (err) {
                    console.log(err)
                    that.$message.warning("网络错误")
                })
            }
        }
    }
}
</script>
