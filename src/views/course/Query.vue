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
                <course-query></course-query>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import CourseTab from '@/components/course/CourseTab'
import CourseQuery from '@/components/course/CourseQuery'

export default {
    name: 'Query',
    components: { HeaderBar, CourseTab, CourseQuery}
}
</script>