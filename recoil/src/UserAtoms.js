import { atom, selector } from "recoil";
import axios from "axios";

export const currentUserIdState = atom({
    key: "currentUserId",
    default: 2,
})

export const currentUserNameQuery = selector({
    key: "currentUserName",
    get: async({ get }) => {
        const path = 'https://jsonplaceholder.typicode.com/users/'
        const response = await axios.get(`${path}${get(currentUserIdState)}`)
        return response.data.name
    }
})