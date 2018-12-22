<template>
    <div class="show-box">
        <p class="show-box-title">课程设置</p>
        <el-row type="flex" justify="space-between">
            <el-col style="text-align: left">
                <el-button @click="dialogFormVisible = true">添加课程</el-button>
            </el-col>
            <el-col :span="6">
                <el-input placeholder="搜索" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <br>
        <el-card :body-style="{padding : '20px'}">
            <el-row>
                <el-col :span="3">
                    <el-select v-model="option1" placeholder="课程类型">
                        <el-option v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option2" placeholder="年级">
                        <el-option v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option3" placeholder="专业">
                        <el-option v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option4" placeholder="科目">
                        <el-option v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <br>
            <el-row>
                <el-col :span="14">
                    <div class="box">
                        <el-table :data="courseData" style="width: 100%;text-align:left;border:none;">
                            <el-table-column label="课程" width="100">
                                <template slot-scope="scope">
                                    <el-tag v-if="scope.row.zyCourse">{{ scope.row.courseName }}</el-tag>
                                    <el-tag type="info" v-else>{{ scope.row.courseName }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column label="教师" width="100">
                                <template slot-scope="scope">
                                    <el-tag size="mini" type="warning"
                                        v-for="(item, index) in scope.row.teachers" :key="index">{{ item.teacherName }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column label="所在班级">
                                <template slot-scope="scope">
                                    <el-tag size="mini" type="success"
                                        v-for="(item, index) in scope.row.classes" :key="index">{{ item.className }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column label="子课程">
                                <template slot-scope="scope">
                                    <el-tag size="mini" type="danger"
                                        v-for="(item, index) in scope.row.childCourses" :key="index">{{ item.courseName }}</el-tag>
                                </template>
                            </el-table-column>
                            <el-table-column label="具体名单" width="100">
                                <template slot-scope="scope">
                                    <el-button @click="displayCourseStudents(scope.row.courseId)" type="text" size="small">查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!--
                        <div class="page">
                            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                        </div>
                        -->
                    </div>
                </el-col>
                <el-col :span="9" :offset="1" v-show="showCourseStudents">
                    <div v-for="cls in courseStudents" :key="cls.commonClass" class="box class-view">
                        <div class="name">
                            <span>{{ cls.commonClass }}</span>
                            <!-- <el-checkbox checked>全选</el-checkbox> -->
                        </div>
                        <div class="students">
                            <div v-for="stu in cls.data" :key="stu.studentId">
                                <el-checkbox checked>{{ stu.studentName }}</el-checkbox>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-card>

        <el-dialog title="添加课程" :visible.sync="dialogFormVisible">
            <add-course></add-course>
        </el-dialog>
    </div>
</template>

<script>
import api from '@/api'
import AddCourse from './parts/AddCourse'

export default {
    name: 'CourseSetting',
    components: {AddCourse},
    data() {
        return {
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            options1: [],
            options2: [],
            options3: [],
            options4: [],
            showOp: false,
            showCourseStudents: false,
            dialogFormVisible: false,
            courseStudents: [],
            test: [],
            courseData: []
        }
    },
    mounted() {
        let that = this
        api.course.getAllCourses().then(function (resp) {
            console.log(resp.data)
            that.courseData = resp.data.data
        }).catch(function (err) {
            console.log(err)
        })
    },
    methods: {
        displayCourseStudents(id) {
            let that = this
            api.info.getStudentsByCourse(id).then(function (resp) {
                console.log(resp.data)
                that.courseStudents = []
                that.convertStudentData(resp.data.data)
                that.showCourseStudents = true
            }).catch(function (err) {
                console.log(err)
            })
        },
        renderHeader(createElement) {
            return createElement('i', {
                'class': 'iconfont el-icon-my-menu mouse_pointer',
                'on': { click: this.switchOp }
            })
        },
        switchOp() {
            this.showOp = !this.showOp
        },
        handleDelete(index, row) {
            console.log(index, row);
            this.tableData.splice(index, 1);
        },
        convertStudentData(data) {
            let that = this
            let map = {}
            for (let i = 0; i < data.length; i++) {
                let item = data[i]
                if (!map[item.commonClass.className]) {
                    that.courseStudents.push({
                        commonClass: item.commonClass.className,
                        data: [item]
                    })
                    map[item.commonClass.className] = item
                } else {
                    for (let j = 0; j < that.courseStudents.length; j++) {
                        let dj = that.courseStudents[j]
                        if (dj.commonClass == item.commonClass.className) {
                            that.courseStudents[j].data.push(item);
                            break;
                        }
                    }
                }
            }
            console.log(that.courseStudents)
        }
    }
}
</script>


<style scoped>
.box {
    border: 1px solid #ddd;
}
.page {
    margin-top: 50px;
    padding: 10px 0;
}
.class-view {
    margin-bottom: 10px;
}
.class-view .name{
    height: 50px;
    line-height: 50px;
    background:rgba(246,248,249,1);
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
}
.class-view .students {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.class-view .students div {
    height: 40px;
    line-height: 40px;
    padding: 10px 0 0 10px;
}
</style>