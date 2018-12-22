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
                <zteacher-info></zteacher-info>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import InfoTab from '@/components/info/InfoTab'
import ZteacherInfo from '@/components/info/ZteacherInfo'

export default {
    name: 'Zteacher',
    components: { HeaderBar, InfoTab, ZteacherInfo}
}
</script>