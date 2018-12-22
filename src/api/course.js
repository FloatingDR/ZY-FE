import { SERVER_BASE, http } from './config'

export default {
    getCoursesByClass(classid) {
        return http.get(SERVER_BASE + '/course/get_by_class/' + classid)
    },
    getZyCourse(classCourseId) {
        return http.get(SERVER_BASE +  '/course/get_zy_info/' + classCourseId)
    },
    getChildCourses(courseid) {
        return http.get(SERVER_BASE + '/course/get_childs/' + courseid)
    },
    getClassCourseLinks(id) {
        return http.get(SERVER_BASE + '/course/get_link_by_class/' + id)
    },
    getZyClassCourseLinks(id) {
        return http.get(SERVER_BASE + '/course/get_zylink_by_class/' + id)
    },
    addCommonCourse(data) {
        return http.post(SERVER_BASE + '/course/common_add', data)
    },
    addZYCourse(data) {
        return http.post(SERVER_BASE + '/course/zy_add', data)
    },
    getAllCourses() {
        return http.get(SERVER_BASE + '/course/all')
    },
    searchCourse(name) {
        return http.get(SERVER_BASE + '/course/search_common/' + name)
    }
}