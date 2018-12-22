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
                <paper-upload></paper-upload>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import PaperTab from '@/components/paper/PaperTab'
import PaperUpload from '@/components/paper/PaperUpload'

export default {
    name: 'Upload',
    components: { HeaderBar, PaperTab, PaperUpload}
}
</script>