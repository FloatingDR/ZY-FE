<template>
    <el-container class="view-container">
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-container class="main-container">
            <el-aside width="200px">
                
            </el-aside>
            <el-main class="op-container">
                
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import InfoTab from '@/components/info/InfoTab'
import CompanyInfo from '@/components/info/CompanyInfo'

export default {
    name: 'Info',
    components: { HeaderBar, InfoTab, CompanyInfo}
}
</script>