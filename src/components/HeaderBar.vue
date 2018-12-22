<template>
    <el-row class="header">
        <el-col :span="6" style="text-align:left"><img class="" src="../assets/logo.png" height="60px"/></el-col>
        <el-col :span="12">
            <el-menu :default-active="mainPath" mode="horizontal" class="mytab" router>
                <el-menu-item index="/info">信息</el-menu-item>
                <el-menu-item index="/course">课程</el-menu-item>
                <el-menu-item index="/score">成绩</el-menu-item>
                <el-menu-item index="/paper">论文</el-menu-item>
                <el-menu-item index="/query">查询</el-menu-item>
                <el-menu-item index="/apply">申请</el-menu-item>
                <el-menu-item v-if="checkRole" index="/admin">管理员</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="6">
            <el-row type="flex" justify="end" class="user">
                <div><i class="topicon el-icon-bell"></i></div>
                <div>
                    <el-tooltip content="退出登录" placement="bottom" effect="light">
                        <i @click="logout" class="topicon iconfont el-icon-my-tuichu"></i>
                    </el-tooltip>
                </div>
                <div><img src="../assets/head.png">&nbsp;&nbsp;<span>{{ user.loginAccount }}</span></div>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'HeaderBar',
    methods: {
        ...mapActions(['LogoutAction']),
        logout() {
            let that = this
            that.$confirm('确认退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function() {
                that.LogoutAction()
                return that.$router.push("/")
            }).catch(() => {})
        }
    },
    computed: {
        ...mapState(['user']),
        mainPath() {
            return '/'+this.$route.path.split('/')[1]
        },
        checkRole() {
            let role = sessionStorage.getItem('$role') || ''
            return ["ADMIN"].some(function(name) {
                return name == role
            })
        }
    }
}
</script>

<style scoped>
.header {
    height: 60px;
    line-height: 60px;
}
.mytab {
    background-color: #fff;
    border-bottom: none;
    display: flex;
    justify-content: space-around;
}
.mytab .el-menu-item {
    font-size: 16px;
    height: 60px;
    line-height: 60px;
}
.user {
    font-size: 18px;
}
.user div {
    margin: auto 15px;
}
.user > div > img {
    vertical-align: middle;
}
.topicon {
    cursor: pointer;
}
</style>