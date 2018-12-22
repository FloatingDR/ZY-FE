<template>
    <div class="maintab">
        <el-menu :default-active="$route.path" router :default-openeds="['1',]">
            <el-submenu index="1">
                <template slot="title">
                    <i class="iconfont el-icon-my-ren"></i>
                    <span>教师信息</span>
                </template>
                <el-menu-item-group class="main-bg">
                    <el-menu-item index="/info" style="padding-right:5px; font-size:13px">专职教师</el-menu-item>
                    <el-menu-item index="/info/wteacher" style="padding-right:5px; font-size:13px">外聘教师</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/info/student">
                <i class="iconfont el-icon-my-wodexuesheng"></i>
                <span slot="title">学生信息</span>
            </el-menu-item>
            <el-menu-item index="/info/class">
                <i class="iconfont el-icon-my-tuandui"></i>
                <span slot="title">班级信息</span>
            </el-menu-item>
            <el-menu-item index="/info/company" route="/info/company">
                <i class="iconfont el-icon-my-gongsixinxi1"></i>
                <span slot="title">公司信息</span>
            </el-menu-item>
            <el-menu-item index="/info/import">
                <i class="iconfont el-icon-my-tubiao06"></i>
                <span slot="title">&nbsp;信息导入</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'InfoTab'
}
</script>