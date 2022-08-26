import axios from 'axios'
import { IApiData } from '../pages/auth/index'

const baseUrl = process.env.REACT_APP_BASE_URL
console.log(baseUrl)

const authApi = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
})

// Endpoints list 👇
export const sendOtp = async (data: IApiData) => {
  return await authApi.post('/api/send-otp', data)
}
export const verifyOtp = async (data: any) => {
  return await authApi.post('/api/verify-otp', data)
}
export const activate = async (data: any) => {
  try {
    return await authApi.post('/api/activate', data)
  } catch (err) {
    throw err
  }
  // return authApi.post('/api/activate', data).then((res) => res)
}

export default authApi
