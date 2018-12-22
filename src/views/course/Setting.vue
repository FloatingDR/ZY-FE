<template>
    <el-container class="view-container">
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-container class="main-container">
            <el-aside width="200px">
                <course-tab></course-tab>
            </el-aside>
            <el-main class="op-container">
                <course-setting></course-setting>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import CourseTab from '@/components/course/CourseTab'
import CourseSetting from '@/components/course/CourseSetting'

export default {
    name: 'Setting',
    components: { HeaderBar, CourseTab, CourseSetting}
}
</script>