import { SERVER_BASE, http } from './config'

export default {
    importWTeacher(filename) {
        return http.get(SERVER_BASE + '/import/wteacher/' + filename)
    },
    importStudent(filename) {
        return http.get(SERVER_BASE + '/import/student/' + filename)
    },
    importScore(filename) {
        return http.get(SERVER_BASE + '/import/score/' + filename)
    }
}