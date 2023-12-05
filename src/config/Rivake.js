import axios from "axios";
import config from "./config"
const POSSystem = axios.create({
    baseURL:config.base_url
})

export default POSSystem