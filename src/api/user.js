import { SERVER_BASE, http } from './config'

export default {
    login(account, password) {
        return http.post(SERVER_BASE + '/auth/login', {
            'loginAccount': account,
            'loginPassword': password
        })
    }
}