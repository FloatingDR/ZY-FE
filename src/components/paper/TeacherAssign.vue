<template>
    <div class="show-box">
        <p class="show-box-title">导师分配</p>
        <br>
        <el-card :body-style="{padding : '40px'}">
            <el-row>
                <el-col :span="11" style="margin-right:30px;">
                    <el-row>
                        <el-col :span="5">
                            <el-select v-model="option1" placeholder="请选择">
                                <el-option v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :offset="1" :span="5">
                            <el-select v-model="option2" placeholder="请选择">
                                <el-option v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :offset="1" :span="5">
                            <el-select v-model="option2" placeholder="请选择">
                                <el-option v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <br>
                    <div class="box class-view">
                        <div class="name">
                            <span>姓名</span>
                        </div>
                        <div class="students">
                            <div><el-checkbox checked>张三</el-checkbox></div>
                            <div><el-checkbox checked>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="11">
                    <el-row>
                        <el-col :span="5">
                            <el-select v-model="option1" placeholder="请选择">
                                <el-option v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :offset="1" :span="5">
                            <el-select v-model="option2" placeholder="请选择">
                                <el-option v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :offset="1" :span="5">
                            <el-select v-model="option2" placeholder="请选择">
                                <el-option v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <br>
                    <div class="box class-view">
                        <div class="name">
                            <span>姓名</span>
                        </div>
                        <div class="students">
                            <div><el-checkbox checked>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                            <div><el-checkbox>张三</el-checkbox></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" justify="end" class="btns">
                <el-button size="small">取消</el-button>
                <el-button size="small" type="primary">确认</el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'TeacherAssign',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>


<style scoped>
.box {
    border: 1px solid #ddd;
}
.class-view {
    padding-bottom: 60px;
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
    width: 60px;
    padding: 10px 0 0 10px;
    border-bottom: 1px solid #ddd;
}
.btns {
    padding: 30px 80px 0;
}
</style>
