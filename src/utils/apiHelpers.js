import axios from "axios";
import Cookies from "js-cookie";

export const apiGet = (path, conf = {}, auth = true) => {
    const config = {
      ...conf,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    if (!auth) {
      config.headers = {};
    }
    return axios.get(`${process.env.REACT_APP_API}${path}`, config);
  };
  
  export const apiPost = (path, data, { headers, ...conf }, auth = true)  => {
    const Authorization = auth && `Bearer ${Cookies.get("token")}`;
    // const Authorization = auth && `Bearer ${localStorage.getItem("token")}`;÷
    
    const config = {
      ...conf,
      headers: {
        Authorization,
        ...(headers ? headers : {}),
      },
    };
    
    return axios.post(`${process.env.REACT_APP_API}${path}`, data, config);
    // return axios.post(`${process.env.REACT_APP_API_URL}${path}`, data, config);
    // return axios.post(`http://localhost:3000/v1${path}`, data, config);
  };