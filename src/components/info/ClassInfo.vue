<template>
    <div class="show-box">
        <p class="show-box-title">班级信息</p>
        <el-row>
            <el-col :offset="18" :span="6">
                <el-input placeholder="搜索" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <br>
        <el-row>
            <el-col :span="3">
                <el-select placeholder="班级类型" v-model="classType"
                    @change="changeClassType($event)">
                    <el-option label="校内班级" :value=0></el-option>
                    <el-option label="卓越班级" :value=1></el-option>
                </el-select>
            </el-col>
            <div v-if="!classType">
                <el-col :offset="1" :span="3">
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
                
                <!-- <el-col :offset="1" :span="3">
                    <el-select v-model="option3" placeholder="年级">
                        <el-option v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col> -->

            </div>
        </el-row>
        <br>
        <div class="classes" v-if="!classType">
            <el-card :body-style="{ padding: '0px' }" :class="{'class-card':true}" 
                :key="index" v-for="(cls,index)  in classes">
                <div slot="header" >
                    <span>{{ cls.className }}</span>
                </div>
                <div>
                    <table class="content">
                        <tr class="tit">
                            <td>班级人数</td>
                            <td>辅导员</td>
                        </tr>
                        <tr class="ctt">
                            <td>{{ cls.stuAmount }}</td>
                            <td>{{ cls.daoyuan.teacherName }}</td>
                        </tr>
                    </table>
                    <div class="bottom">
                        <i class="el-icon-download"></i>
                        <i class="el-icon-edit" @click="displayStudents(cls.classId)"></i>
                        <i class="el-icon-more"></i>
                    </div>
                </div>
            </el-card>
        </div>
        <div v-else class="classes">
            <el-card v-for="(cls,index)  in ZyClasses" :key="index" :body-style="{ padding: '0px' }" class="class-card zy-class">
                <div slot="header">
                    <span>{{ cls.className }}</span>
                </div>
                <div>
                    <table class="content">
                        <tr class="tit">
                            <td>班级人数</td>
                            <td>辅导员</td>
                        </tr>
                        <tr class="ctt">
                            <td>2</td>
                            <td>{{ cls.daoyuan.teacherName }}</td>
                        </tr>
                    </table>
                    <div class="bottom">
                        <i class="el-icon-download"></i>
                        <i class="el-icon-edit" @click="displayStudents(cls.classId)"></i>
                        <i class="el-icon-more"></i>
                    </div>
                </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }" class="class-card add-class">
                <i class="el-icon-plus" @click="dialogFormVisible = true"></i>
            </el-card>
        </div>
        <br>
        <student-list :students="students" v-if="showStudents"></student-list>

        <el-dialog title="添加卓越班级" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="班级名称" label-width="100px">
                    <el-input v-model="form.classname" auto-complete="off"></el-input>
                </el-form-item>
                <div>
                    <p style="text-align: left">学生设置</p>
                    <choose-class-tab @listenClassChange="ZYChangeClass"></choose-class-tab>
                    <div>
                        <div class="box class-view" v-for="(obj, index) in form.classes" :key="index">
                            <div class="name">
                                <span>{{ obj.className }}</span>
                                <el-checkbox checked>全选</el-checkbox>
                                <i class="el-icon-delete" style="color: red; line-height: 50px; font-size: 18px; cursor: pointer"
                                    @click="deleteAddZyClass(obj.classId)"></i>
                            </div>
                            <div class="students">
                                <div v-for="(link,index) in obj.studentClassLinks" :key="index">
                                    <el-checkbox checked>{{ link.student.studentName }}</el-checkbox>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import StudentList from './parts/StudentList'
import ChooseClassTab from './parts/ChooseClassTab'
import api from '@/api'

export default {
    name: 'ClassInfo',
    components:  {StudentList, ChooseClassTab},
    data() {
        return {
            showOp: false,
            classType: 0,
            option1: '',
            option2: '',
            option3: '',
            options1: [],
            options2: [],
            options3: [],
            classes: [],
            showStudents: false,
            students: [],
            dialogFormVisible: false,
            form: {
                className: null,
                classes: []
            },
            ZyAddClasses: new Map(),
            ZyClasses: []
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
        that.getClasses()
    },
    methods: {
        getClasses() {
            let that = this
            api.info.getClasses().then(function(resp) {
                if(resp.data.code == 200) {
                    that.classes = resp.data.data
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        getZyClasses() {
            let that = this
            api.info.getZyClasses().then(function(resp) {
                if (resp.data.code == 200) {
                    that.ZyClasses = resp.data.data
                }
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
        changeClassType(value) {
            let that = this
            that.classes = []
            that.showStudents = false
            if (value == 1) {
                that.getZyClasses()
            } else {
                that.getClasses()
            }
        },
        changeCollege(value) {
            this.options2 = this.options1.find(college => college.collegeId === value)['majors']
        },
        changeMajor(value) {
            let that = this
            api.tab.getClassesByMajor(value).then(function (resp) {
                console.log(resp.data)
                if (resp.data.code == 200) {
                    that.classes = resp.data.data
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        displayStudents(classid) {
            let that = this
            api.info.getStudentsByClass(classid).then(function(resp) {
                if(resp.data.code == 200) {
                    that.students = resp.data.data
                    that.showStudents = true
                }
            })
        },
        ZYChangeClass(data) {
            let that = this
            api.info.getClassAndStudents(data).then(function (resp) {
                if(resp.data.code == 200) {
                    that.ZyAddClasses.set(data, resp.data.data)
                    that.form.classes = [...that.ZyAddClasses.values()]
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        deleteAddZyClass(id) {
            let that = this
            that.ZyAddClasses.delete(id)
            that.form.classes = [...that.ZyAddClasses.values()]
        }
    }
}
</script>

<style scoped>
.classes {
    display: flex;
    flex-wrap: wrap;
}
.class-active {
    box-shadow: 0 2px 12px 0 #409EFF;
}
.class-card {
    width: 220px;
    height: 160px;
    margin: 10px 20px 10px 0;
}
.class-card:hover {
    box-shadow: 0 2px 12px 0 #409EFF;
}
.class-card .content {
    width: 100%;
    padding: 18px 0;
}
.class-card .tit {
    font-size: 12px;
}
.class-card .ctt {
    font-size: 18px;
    font-weight: 600;
}
.class-card .bottom {
    display: flex;
    justify-content: flex-end;
    background-color: #f6f8f9;
    border-top: 1px solid #eee;
}
.class-card .bottom i {
    height: 34px;
    line-height: 34px;
    width: 30px;
    margin-left: 15px;
    cursor: pointer;
}
.el-icon-error {
    cursor: pointer;
    color: red;
}
.zy-class .bottom {
    background-color: #e7f5ff;
    border-top: 1px solid #eee;
}
.add-class {
    cursor: pointer;
}
.add-class i{
    font-size: 60px; 
    color: #aaa; 
    line-height: 160px;
}

.box {
    border: 1px solid #ddd;
}
.class-view {
    margin: 10px;
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