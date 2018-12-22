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
                <score-collection></score-collection>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import ScoreTab from '@/components/score/ScoreTab'
import ScoreCollection from '@/components/score/ScoreCollection'

export default {
    name: 'Collection',
    components: { HeaderBar, ScoreTab, ScoreCollection}
}
</script>