import Axios from "axios"

const api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"

export default {
    async getRewardById (id) {
        try {
            let res = await Axios.get(`${api_endpoint}/rewards/${id}`)
            return res.data
        } catch (e) {

        }
    }
}