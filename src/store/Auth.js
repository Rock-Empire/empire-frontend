import Cookies from "js-cookie";

const isAuthenticated = () => {
  if(typeof window === 'undefined') {
    return false;
  }
  if(!Cookies.get("user") && !Cookies.get("token") && !Cookies.get("isAuthenticated")) {
    return false;
  }
  const user = JSON.parse(Cookies.get("user"));
  const token = JSON.parse(Cookies.get("token"));
  const auth = JSON.parse(Cookies.get("isAuthenticated"));
  if(user || token || auth) {

    return [user, token, auth];
  }
  return false;
}

export default isAuthenticated;