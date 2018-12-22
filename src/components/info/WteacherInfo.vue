<template>
    <div class="show-box">
        <p class="show-box-title">外聘教师</p>
        <teacher-list></teacher-list>
    </div>
</template>

<script>
import api from '@/api'
import TeacherList from './parts/WTeacherList'

export default {
    name: 'WteacherInfo',
    components: {TeacherList}
}
</script>