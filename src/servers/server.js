import axios from 'axios'

const config = {}

if(global.document){
    config.baseURL = "http://yuanjin.tech:5005/"; 
}else{
    config.baseURL = "http://yuanjin.tech:5005/"; 
}

const instance = axios.create(config)

export default instance