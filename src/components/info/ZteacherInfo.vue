<template>
    <div class="show-box">
        <p class="show-box-title">专职教师</p>
        <teacher-list></teacher-list>
    </div>
</template>

<script>
import api from '@/api'
import TeacherList from './parts/ZTeacherList'

export default {
    name: 'ZteacherInfo',
    components: {TeacherList}
}
</script>