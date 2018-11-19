import api from '../infra/api-config'

export function signupUser(user){
    const url = '/users'

    return api().post(url, user)
}