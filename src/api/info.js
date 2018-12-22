import { SERVER_BASE, http } from './config'

export default {
    // college class
    getColleges() {
        return http.get(SERVER_BASE + '/college/get_all')
    },
    getStaffs() {
        return http.get(SERVER_BASE + '/college/get_all_staff')
    },
    getClasses() {
        return http.get(SERVER_BASE + '/class/get_all')
    },
    searchClass(value) {
        return http.get(SERVER_BASE + '/class/search_by_name/' + value)
    },
    getZyClasses() {
        return http.get(SERVER_BASE + '/class/get_zy_class')
    },
    // teacher
    addTeacher(teacher) {
        return http.post(SERVER_BASE + '/teacher/add', teacher)
    },
    getTeachersByStaff(staffid) {
        return http.get(SERVER_BASE + '/teacher/get_by_staff/' + staffid)
    },
    getWTeachers() {
        return http.get(SERVER_BASE + '/teacher/get_wteacher')
    },
    getZTeachers() {
        return http.get(SERVER_BASE + '/teacher/get_zteacher')
    },
    // student
    addStudent(student) {
        return http.post(SERVER_BASE + '/student/add', student)
    },
    getStudents() {
        return http.get(SERVER_BASE + '/student/all')
    },
    getStudentsByClass(classid) {
        return http.get(SERVER_BASE + '/student/get_by_class/' + classid)
    },
    getStudentsByCourse(courseid) {
        return http.get(SERVER_BASE + '/student/get_by_course/' + courseid)
    },
    getClassAndStudents(classid) {
        return http.get(SERVER_BASE + '/class/get_by_id/' + classid)
    },
    searchTeacher(value) {
        return http.get(SERVER_BASE + '/teacher/search_by_name/' + value)
    }
}