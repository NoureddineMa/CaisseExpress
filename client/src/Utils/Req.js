import API from './Api'


// Log Function :
export async function Login(user){
    const res = await API.post(`/auth/login`,user)
    return res.data
}