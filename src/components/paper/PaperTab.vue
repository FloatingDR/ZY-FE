<template>
    <div class="maintab">
        <el-menu :default-active="$route.path" router :default-openeds="['1',]"> 
            <el-menu-item index="/paper">
                <i class="iconfont el-icon-my-lunwentimu"></i>
                <span slot="title">论文总览</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="iconfont el-icon-my-lunwenxuanti"></i>
                    <span>论文审核</span>
                </template>
                <el-menu-item-group class="main-bg">
                    <el-menu-item index="/paper/1" style="padding-left:70px; font-size:13px">题目</el-menu-item>
                    <el-menu-item index="/paper/2" style="padding-left:70px; font-size:13px">任务书</el-menu-item>
                    <el-menu-item index="/paper/3" style="padding-left:70px; font-size:13px">开题报告</el-menu-item>
                    <el-menu-item index="/paper/4" style="padding-left:70px; font-size:13px">指导记录</el-menu-item>
                    <el-menu-item index="/paper/5" style="padding-left:70px; font-size:13px">论文</el-menu-item>
                    <el-menu-item index="/paper/6" style="padding-left:70px; font-size:13px">评阅</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/paper/upload">
                <i class="iconfont el-icon-my-shangchuan"></i>
                <span slot="title">论文上传</span>
            </el-menu-item>
            <el-menu-item index="/paper/assign">
                <i class="iconfont el-icon-my-fenpei"></i>
                <span slot="title">导师分配</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'InfoTab'
}
</script>
