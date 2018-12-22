<template>
    <el-container class="view-container">
        <el-header>
            <header-bar></header-bar>
        </el-header>
        <el-container class="main-container">
            <el-aside width="200px">
                <score-tab></score-tab>
            </el-aside>
            <el-main class="op-container">
                <score-query></score-query>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import ScoreTab from '@/components/score/ScoreTab'
import ScoreQuery from '@/components/score/ScoreQuery'

export default {
    name: 'Query',
    components: { HeaderBar, ScoreTab, ScoreQuery}
}
</script>