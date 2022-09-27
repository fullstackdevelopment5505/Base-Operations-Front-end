import axios from "axios"

const getUsers = (lat, lng, radius) => new Promise((res, rej) => {
    axios.get('/getusers', {params: { lat, lng, radius }}).then(res).catch(rej)
})

export default getUsers