<template>
    <div class="index">
        <div class="login-box">
            <el-row type="flex" justify="space-between">
                <el-col :span="10">
                </el-col>
                <el-col :span="10">
                    <div class="box">
                        <p class="title">登陆</p>
                        <el-form size="small">
                            <el-form-item>
                                <el-input v-model="username" class="logininput" prefix-icon="iconfont el-icon-my-msnui-user"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="password" type="password" class="logininput" prefix-icon="iconfont el-icon-my-suo"></el-input>
                            </el-form-item>
                            <el-row type="flex" justify="space-between" style="padding:0 6px;">
                                <el-checkbox class="mycheckbox" label="自动登录"></el-checkbox>
                                <a class="forget">忘记密码</a>
                            </el-row>
                            <br>
                            <el-form-item class="mybtngrp">
                                <el-button class="mybtn" type="primary" @click="login">登陆</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row type="flex" justify="center" class="main-bg">
            <el-col :span="12" class="main-box">
                <div class="notice">
                    <div class="title">
                        <span class="name">置顶公告</span>
                    </div>
                    <div class="content">
                        <ul>
                            <li><div><span class="new-notice">[ 新 ] </span>关于中国民航飞行学院课程补修申请的公告（8月20日）关于中国民航飞行学院课程补修申请的公告（8月20日）关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div><span class="new-notice">[ 新 ] </span>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div><span class="new-notice">[ 新 ] </span>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                        </ul>
                    </div>
                </div>
                <div class="notice">
                    <div class="title">
                        <span class="name">动态公告</span>
                        <a class="more">查看更多 &gt;</a>
                    </div>
                    <div class="content">
                        <ul>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）关于中国民航飞行学院课程补修申请的公告（8月20日）关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                        </ul>
                    </div>
                </div>
                <div class="notice">
                    <div class="title">
                        <span class="name">调课公告</span>
                        <a class="more">查看更多 &gt;</a>
                    </div>
                    <div class="content">
                        <ul>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）关于中国民航飞行学院课程补修申请的公告（8月20日）关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                            <li><div>关于中国民航飞行学院课程补修申请的公告（8月20日）</div></li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import api from '@/api'

export default {
    name: 'Index',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['LoginAction']),
        login() {
            let that = this
            if (this.username == '' || this.password == '') {
                this.$message.warning("不能为空");
                return false;
            }
            api.user.login(that.username, that.password).then(function(resp) {
                if(resp.data.code == 200) {
                    that.LoginAction(resp.data.data)
                    sessionStorage.setItem('$token', resp.data.msg)
                    that.$message.success('登陆成功')
                    that.$router.push('/info')
                } else {
                    that.$message.warning('登陆失败')
                }
            }).catch(function(err) {
                that.$message.error('网络错误')
            })
        }  
    }
}
</script>

<style scoped>
.login-box {
    background-image: url('../assets/lbg.png');
    background-size: cover; 
    height: 300px;
}
.box {
    margin-top: 40px;
    padding: 3px 15px;
    height: 240px;
    width: 240px;
    background-color: #fff;
}
.box .title {
    font-size: 18px;
    font-weight: 600;
    padding-left: 10px;
    margin: 10px 0;
    text-align: left;
    color: #555;
}
.mybtngrp {
    text-align: left;
    padding: 0 6px;
}
.mybtn{
    border-radius: 0;
    width: 90px;
}
.forget {
    font-size: 14px;
}
.main-bg {
    background-color: #f5f5f5;
}
.main-box {
    background-color: #fff;
    padding: 30px;
    height: 100%;
}
.notice {
    color: #666;
}
.notice div.title {
    font-size: 16px;
    text-align: left;
    border-bottom: 1px solid #aaa;
    display: flex;
    justify-content: space-between;
}
.notice div.title .name{
    font-size: 17px;
    padding-bottom: 10px;
}
.notice div.title .more {
    font-size: 13px;
    cursor: pointer;
    position: relative;
    bottom: -12px;
}
.notice div.content {
    padding: 0 0 0 30px;
    text-align: left;
}
.notice div.content ul li {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
}
.notice div.content ul li div{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.new-notice{
    color: red;
}
</style>