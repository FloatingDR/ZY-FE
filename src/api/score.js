import { SERVER_BASE, http } from './config'

export default {
    getCourseScore(id) {
        return http.get(SERVER_BASE + '/score/get_by_course/' + id)
    }
}