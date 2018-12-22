<template>
    <div class="maintab">
        <el-menu :default-active="$route.path" router>
            <el-menu-item index="/score">
                <i class="el-icon-document"></i>
                <span slot="title">成绩查询</span>
            </el-menu-item>
            <el-menu-item index="/score/collection">
                <i class="el-icon-date"></i>
                <span slot="title">147 成绩</span>
            </el-menu-item>
            <el-menu-item index="/score/edit">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">成绩导入</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'ScoreTab'
}
</script>