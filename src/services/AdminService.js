import Axios from "axios"
import AuthService from '@/services/AuthService'

const api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"

export default {
    async getRewardById (id) {
        try {
            let headers = AuthService.getApiHeader()
            let url = `${api_endpoint}/rewards/${id}`
            let res = await Axios.get(url, headers)
            return res.data
        } catch (e) {

        }
    }
}