import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBlcHNpIiwic3ViIjo5LCJyZWFsTmFtZSI6InBlcHNpIiwiaWF0IjoxNjA0NjU1NDQ3LCJleHAiOjE2MDQ2ODQyNDd9.Q-sZssLWT4BbBVlTSUeQr9jp3dvoSRphjUMZuWKUcFk'
    }
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(res => {
    return res.data
}, error => {
    return Promise.reject(error)
})

export default request