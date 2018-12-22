<template>
    <div class="student">
        <el-table :data="students">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-input :disabled="!showOp" :value="props.row.secret" ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="studentNumber" label="学号" width="120">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.studentNumber" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="studentName" label="姓名" width="80">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.studentName" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="pob" label="籍贯" width="">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.pob" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="birthday" label="出生日期" width="">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.birthday" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="male" label="性别" width="80">
                <template slot-scope="scope">
                    <el-select :class="{'non-border':!showOp}" size="small" v-model="scope.row.male" :disabled="!showOp"
                        @change="handleChange(scope.$index, scope.row)">
                        <el-option label="男" :value=true></el-option>    
                        <el-option label="女" :value=false></el-option>    
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="cpc" label="是否党员" width="80">
                <template slot-scope="scope">
                    <el-select :class="{'non-border':!showOp}" size="small" v-model="scope.row.cpc" :disabled="!showOp"
                        @change="handleChange(scope.$index, scope.row)">
                        <el-option label="是" :value=true></el-option>
                        <el-option label="否" :value=false></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column label="专业班级" width="100">
                <template slot-scope="scope">
                    <span v-text="commonClass(scope.row.studentClassLinks)"></span>
                </template>
            </el-table-column>
            <el-table-column label="卓越班级" width="100">
                <template slot-scope="scope">
                    <span v-text="zyClass(scope.row.studentClassLinks)"></span>
                </template>
            </el-table-column>
            <el-table-column prop="punishment" label="处分情况" width="80">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.punishment" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="cet" label="四六级">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.cet" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="dormitory" label="宿舍">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.dormitory" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="companyId" label="就业单位">
                <template slot-scope="scope">
                    <el-input :class="{'non-border':!showOp}" size="small" v-model="scope.row.companyId" :readonly="!showOp"
                        @change="handleChange(scope.$index, scope.row)"></el-input>
                </template>
            </el-table-column>
            <el-table-column :render-header="renderHeader" width="60">
                <template slot-scope="scope">
                    <i v-show="showOp" @click="handleDelete(scope.$index, scope.row)" class="el-icon-error"></i>
                </template>
            </el-table-column>
        </el-table>
        <el-button v-show="showOp" style="width: 100%;border-top:none"><i class="el-icon-plus"></i> 新增成员</el-button>
        <br>
        <el-row v-show="showOp" type="flex" justify="end" class="btns">
            <el-button size="small">取消</el-button>
            <el-button size="small" type="primary">确认</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'StudentList',
    props: ['students'],
    data() {
        return {
            showOp: false,
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
            this.students.splice(index, 1);
        },
        commonClass(links) {
            let name = ''
            links.forEach(element => {
                if(element.stuClass.zyClass == 0)
                    name += element.stuClass.className + ' '
            })
            return name
        },
        zyClass(links) {
            let name = ''
            links.forEach(element => {
                if(element.stuClass.zyClass == 1)
                    name += element.stuClass.className + ' '
            })
            return name
        },
        sexFmt(value) {
            return value ? "男" : "女"
        },
        boolFmt(value) {
            return value ? "是" : "否"
        }
    },
    computed: {
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
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 140px;
}
.el-table th {
    text-align: center;
}
</style>