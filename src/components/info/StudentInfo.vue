<template>
    <div class="show-box">
        <p class="show-box-title">学生信息</p>
        <el-row>
            <el-col :offset="18" :span="6">
                <el-input placeholder="搜索" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <br>
        <el-card :body-style="{ padding: '10px 40px' }">
            <br>
            <el-row>
                <el-col :span="3">
                    <el-select v-model="option1" placeholder="学院"
                        @change="changeCollege($event)">
                        <el-option v-for="item in options1"
                            :key="item.collegeId"
                            :label="item.collegeName"
                            :value="item.collegeId">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option2" placeholder="专业"
                        @change="changeMajor($event)">
                        <el-option v-for="item in options2"
                            :key="item.majorId"
                            :label="item.majorName"
                            :value="item.majorId">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option3" placeholder="班级"
                        @change="changeClass($event)">
                        <el-option v-for="item in options3"
                            :key="item.classId"
                            :label="item.className"
                            :value="item.classId">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <br>
            <student-list :students="students"></student-list>
        </el-card>
    </div> 
</template>

<script>
import StudentList from './parts/StudentList'
import api from '@/api'

export default {
    name: 'StudentInfo',
    components: {StudentList},
    data() {
        return {
            option1: '',
            option2: '',
            option3: '',
            options1: [],
            options2: [],
            options3: [],
            students: []
        }
    },
    mounted() {
        let that = this
        api.tab.getColleges().then(function(resp) {
            console.log(resp.data) 
            if(resp.data.code == 200) {
                that.options1 = resp.data.data
            }
        }).catch(function (err) {
            console.log(err)
        })
        api.info.getStudents().then(function(resp) {
            if(resp.data.code == 200) {
                that.students = resp.data.data
            }
        }).catch(function (err) {
            console.log(err)
        })
    },
    methods: {
        changeCollege(value) {
            this.options2 = this.options1.find(college => college.collegeId === value)['majors']
        },
        changeMajor(value) {
            let that = this
            api.tab.getClassesByMajor(value).then(function (resp) {
                console.log(resp.data)
                if (resp.data.code == 200) {
                    that.options3 = resp.data.data
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        changeClass(value) {
            let that = this
            api.info.getStudentsByClass(value).then(function (resp) {
                console.log(resp.data)
                if (resp.data.code == 200) {
                    that.students = resp.data.data
                }
            }).catch(function (err) {
                console.log(err)
            })
        }
    }
}
</script>