// necessary constants
export const API_BASE_URL = process.env.NODE_ENV === 'development'
    ? "http://localhost:4000/api"
    : "https://syncsketch-server.onrender.com/api";

export const API_ENDPOINTS = {
    signup: "/auth/signup",
    login: "/auth/login",
    logout: "/auth/logout",
    getuser: "/auth/userdetails"
}