import axios from "axios"
import { API_DELETE_MY_SUCCESS, API_EDIT_MY_SUCCESS, API_FAILED, API_GET_MY_SUCCESS, API_GET_SUCCESS, API_POST_SUCCESS, API_REQUEST } from "./actionTypes"


let baseUrl = "https://carback-xs8y.onrender.com"

export const addDealFun = (formData) => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.post(`${baseUrl}/market/add`, formData, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_POST_SUCCESS })
        localStorage.setItem("marketmsg", res.data.msg);
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

export const getDealFun = () => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/data`,).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}
export const getPriceDealFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/price?price=${value}`,).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}
export const getMileageDealFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/mileage?mileage=${value}`,).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}
export const getColorDealFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/color?color=${value}`,).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}
export const getSearchDealFun = (value) => (dispatch) => {
    console.log(value)

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/search?search=${value}`,).then((res) => {
        dispatch({ type: API_GET_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

export const getMyDealFun = () => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.get(`${baseUrl}/market/dealer`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_GET_MY_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}


export const deleteMyDealFun = (id) => (dispatch) => {


    dispatch({ type: API_REQUEST })

    return axios.delete(`${baseUrl}/market/delete/${id}`, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_DELETE_MY_SUCCESS })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

export const editMyDealFun = (id, newData) => (dispatch) => {

    dispatch({ type: API_REQUEST })

    return axios.patch(`${baseUrl}/market/update/${id}`, newData, {
        headers: {
            "Authorization": `bearer ${localStorage.getItem("token")}`,
        }
    }).then((res) => {
        dispatch({ type: API_EDIT_MY_SUCCESS })
    }).catch((err) => {
        dispatch({ type: API_FAILED })
    })

}

