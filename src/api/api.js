import axios from "axios"

export const getUser = async () => {
    const response = await axios.get(`https://64786f6e362560649a2dc321.mockapi.io/users`)
    return response.data
}
export const updateUser = async (id,data) => {
    const response = await axios.patch(`https://64786f6e362560649a2dc321.mockapi.io/users/${id}`, data)
    console.log( response.data)
    return response.data
}