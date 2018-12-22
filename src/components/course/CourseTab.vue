<template>
    <div class="maintab">
        <el-menu :default-active="$route.path" router>
            <el-menu-item index="/course">
                <i class="iconfont el-icon-my-tuandui"></i>
                <span slot="title">课程查询</span>
            </el-menu-item>
            <el-menu-item index="/course/setting">
                <i class="iconfont el-icon-my-gongsixinxi1"></i>
                <span slot="title">课程设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'CourseTab'
}
</script>