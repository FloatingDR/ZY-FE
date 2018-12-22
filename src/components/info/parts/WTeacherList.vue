<template>
    <div class="teacher">
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
            <el-table :data="teachers">
                <el-table-column prop="teacherName" label="姓名" width="80">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.teacherName" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="sfzNumber" label="身份证号" width="160">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.sfzNumber" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="graduateSchool" label="毕业院校">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.graduateSchool" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="graduateMajor" label="所学专业">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.graduateMajor" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="eduBg" label="学历" width="60">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.eduBg" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="company" label="公司">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.company" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="职称">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.title" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="phone" label="联系电话">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.phone" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.email" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="projects" label="承担项目">
                    <template slot-scope="scope">
                        <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.projects" :readonly="!showOp"
                            @change="handleChange(scope.$index, scope.row)"></el-input>
                    </template>
                </el-table-column>
                <el-table-column :render-header="renderHeader" width="60">
                    <template slot-scope="scope">
                        <i v-show="showOp" @click="handleDelete(scope.$index, scope.row)" class="el-icon-error"></i>
                    </template>
                </el-table-column>
            </el-table>
            <el-button v-show="showOp" style="width: 100%;border-top:none"
                @click="showAddForm = true"><i class="el-icon-plus"></i> 新增成员
            </el-button>
            <br>
            <el-row v-show="showOp" type="flex" justify="end" class="btns">
                <el-button size="small">取消</el-button>
                <el-button size="small" type="primary">确认</el-button>
            </el-row>
        </el-card>

        <el-dialog title="添加" :visible.sync="showAddForm" class="dialogForm">
            <el-form :model="AddTeacherForm">
                <el-form-item label="姓名" label-width="100px">
                    <el-input v-model="AddTeacherForm.teacherName"></el-input>
                </el-form-item>
                <el-form-item label="民族" label-width="100px">
                    <el-input v-model="AddTeacherForm.nation"></el-input>
                </el-form-item>
                <el-form-item label="来院日期" label-width="100px">
                    <el-date-picker value-format="yyyy-MM-dd" type="date" v-model="AddTeacherForm.arrivalDate"></el-date-picker>
                </el-form-item>
                <el-form-item label="出生日期" label-width="100px">
                    <el-date-picker value-format="yyyy-MM-dd" type="date" v-model="AddTeacherForm.birthday"></el-date-picker>
                </el-form-item>
                <el-form-item label="是否党员" label-width="100px">
                    <el-select v-model="AddTeacherForm.cpc">
                        <el-option label="是" :value=1></el-option>
                        <el-option label="否" :value=0></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="学历" label-width="100px">
                    <el-input v-model="AddTeacherForm.eduBg"></el-input>
                </el-form-item>
                <el-form-item label="获奖情况" label-width="100px">
                    <el-input v-model="AddTeacherForm.reward"></el-input>
                </el-form-item>
                <el-form-item label="学院" label-width="100px">                    
                    <el-select v-model="AddTeacherForm.collegeId" placeholder="学院"
                        @change="changeCollege($event)">
                        <el-option v-for="(item, index) in colleges"
                            :key="index"
                            :label="item.collegeName"
                            :value="item.collegeId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="教研室" label-width="100px">
                    <el-select v-model="AddTeacherForm.staffId" placeholder="教研室">
                        <el-option v-for="(item, index) in staffs"
                            :key="index"
                            :label="item.staffName"
                            :value="item.staffId">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="教师类型" label-width="100px">
                    <el-select v-model="AddTeacherForm.teacherType" placeholder="请选择类型">
                        <el-option label="专职教师" value="0"></el-option>
                        <el-option label="外聘教师" value="1"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showAddForm = false">取 消</el-button>
                <el-button type="primary" @click="addTeacher">添 加</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import api from '@/api'

export default {
    name: 'WTeacherList',
    mounted() {
        let that = this
        api.tab.getColleges().then(function(resp) {
            if(resp.data.code == 200) {
                that.colleges = resp.data.data
            }
        }).catch(function(err) {
            console.log(err)
        })
        api.info.getWTeachers().then(function(resp) {
            console.log(resp.data)
            if(resp.data.code == 200) {
                that.teachers = resp.data.data
            }
        }).catch(function(err) {
            console.log(err)
        })
    },
    data() {
        return {
            option1: '',
            option2: '',
            colleges: [],
            staffs: [],
            teachers: [],
            AddTeacherForm: {
                teacher_type: this.teacherType,
            },
            showOp: false,
            showAddForm: false,
            teachers: []
        }
    },
    methods: {
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
        changeCollege(value) {
            this.staffs = this.colleges.find(college => college.collegeId === value)['staffs']
        },
        getTeachers(value) {
            let that = this
            api.info.getTeachersByStaff(value).then(function (resp) {
                if(resp.data.code == 200) {
                    that.teachers = resp.data.data
                } else {
                    that.$message.warning("获取失败")
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        addTeacher() {
            let that = this
            api.info.addTeacher(that.AddTeacherForm).then(function (resp) {
                if(resp.data.code == 200) {
                    that.$message.success("添加成功")
                    that.showAddForm = false
                } else {
                    that.$message.warning("添加失败")
                }
            }).catch(function (err) {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
.el-icon-error {
    cursor: pointer;
    color: red;
}
.btns {
    padding: 30px 80px 0;
}
.dialogForm .el-input, .dialogForm .el-select {
    width: 300px;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 140px;
}
.el-table th {
    text-align: center;
}
</style>