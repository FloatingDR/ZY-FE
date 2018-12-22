<template>
    <div class="show-box">
        <p class="show-box-title">课程查询</p>
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
                        <el-option v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <br>
            <div style="width: 800px; padding: 20px;">
                <div class="table-tit">
                    <span>动力1404</span>
                    <span>赵若言</span>
                </div>
                <table class="course_table" border="1">
                    <tr>
                        <th>时间</th>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期日</th>
                    </tr>
                    <tr>
                        <td>12节</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>34节</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>56节</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>78节</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>910节</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <table class="table-ext">
                    <tr>
                        <td>普通</td>
                        <td>机务维修实习</td>
                        <td>30</td>
                        <td>150</td>
                        <td>龚雯婷</td>
                    </tr>
                </table>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'CourseQuery',
    data() {
        return {
            showOp: false,
            input1: '',
            option1: '',
            option2: '',
            options1: [
                {
                    value: '选项1',
                    label: '航空工程学院'
                }, {
                    value: '选项2',
                    label: '飞行技术学院'
                }, {
                    value: '选项3',
                    label: '计算机学院'
                }, {
                    value: '选项4',
                    label: '空管学院'
                }
            ],
            options2: [{
                    value: '选项1',
                    label: '飞动教研室'
                }
            ],
            tableData: [{
                    name: '龙江',
                    jiguan: '辽宁',
                    chusheng: '1974.2.13',
                    laiyuan:'1993.4.12',
                    dangyuan:'是',
                    xueli:'博士',
                    huojiang:'2015年第十三届“挑战杯”四川省赛二等奖',
                    danwei:'航空工程学院飞动教研室',
                    beizhu: '该生家庭贫困，有抑郁症'
                }
            ]
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
.course_table {
    width: 100%;
    border-collapse:collapse;
}
.course_table td {
    height: 60px;
}
.course_table tr td:first-child {
    width: 30px;
}
.table-tit {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
}
.table-ext {
    width: 100%;
}
.table-ext tr {
    background-color: #eee;
}
</style>
