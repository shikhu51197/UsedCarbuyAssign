import axios from "axios"
import { OEM_FAILED, OEM_GET_SUCCESS, OEM_REQUEST } from "./actionTypes"

let baseUrl = "https://carback-xs8y.onrender.com"


export const getOemFun = () => (dispatch) => {


    dispatch({ type: OEM_REQUEST })

    return axios.get(`${baseUrl}/oem/`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: OEM_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: OEM_FAILED })
    })

}
