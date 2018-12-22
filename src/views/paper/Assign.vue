<template>
    <el-container class="view-container">
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-container class="main-container">
            <el-aside width="200px">
                <paper-tab></paper-tab>
            </el-aside>
            <el-main class="op-container">
                <teacher-assign></teacher-assign>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import PaperTab from '@/components/paper/PaperTab'
import TeacherAssign from '@/components/paper/TeacherAssign'

export default {
    name: 'Assign',
    components: { HeaderBar, PaperTab, TeacherAssign}
}
</script>