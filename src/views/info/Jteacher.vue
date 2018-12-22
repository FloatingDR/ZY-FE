<template>
    <el-container class="view-container">
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-container class="main-container">
            <el-aside width="200px">
                <info-tab></info-tab>
            </el-aside>
            <el-main class="op-container">
                <jteacher-info></jteacher-info>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import InfoTab from '@/components/info/InfoTab'
import JteacherInfo from '@/components/info/JteacherInfo'

export default {
    name: 'Jteacher',
    components: { HeaderBar, InfoTab, JteacherInfo}
}
</script>