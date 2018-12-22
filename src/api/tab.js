import { SERVER_BASE, http } from './config'

export default {
    getColleges() {
        return http.get(SERVER_BASE + '/tab/colleges')
    },
    getClassesByMajor(majorid) {
        return http.get(SERVER_BASE + '/tab/classes_by_major/' + majorid)
    }
}