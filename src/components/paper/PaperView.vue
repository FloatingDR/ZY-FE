<template>
    <div class="show-box">
        <p class="show-box-title">论文总览</p>
        <el-row>
            <el-col :offset="18" :span="6">
                <el-input placeholder="搜索" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <br>
        <el-card :body-style="{padding : '20px'}">
            <el-row>
                <el-col :span="3">
                    <el-select v-model="option1" placeholder="请选择">
                        <el-option v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option2" placeholder="请选择">
                        <el-option v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :offset="1" :span="3">
                    <el-select v-model="option3" placeholder="请选择">
                        <el-option v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <br>
            <div class="box">
                <el-table :data="tableData" style="width: 100%;text-align:left;border:none;">
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="sid" label="学号" width="180"></el-table-column>
                    <el-table-column prop="classname" label="班级" width="180"></el-table-column>
                    <el-table-column prop="title" label="论文题目"></el-table-column>
                    <el-table-column label="同意选题" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">选择操作</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column :render-header="renderHeader" width="70"></el-table-column>
                </el-table>
                <div class="page">
                    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'PaperView',
    data() {
        return {
            showOp: false,
            tableData: [{
                sid: '20151561',
                name: '王小虎',
                classname: '动力1404',
                title: '发动机滑油系统故障分析'
            }]
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
</style>
