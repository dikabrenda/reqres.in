import axios from "axios"
import qs from "qs"
import dotenv, {config} from "dotenv"
import log from "../helper/log"

dotenv.config();

const testBase = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
        Accept: "application/json",
        ContentType: "application/json"
    },

    transformRequest: [
        function (data) {
            return qs.stringify(data)
        }
    ],

    validateStatus:
        function () {
            return true;
        }
});

testBase.interceptors.response.use(
    response => {
        log(response)
        return response
    },
    err => {
        Promise.reject(err.message)
    }
)

export default testBase