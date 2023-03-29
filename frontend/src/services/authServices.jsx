const host = import.meta.env.VITE_APP_HOST;
export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(authDetail)
  }
  const response = await fetch(`${host}/login`, requestOptions);
  if(!response.ok){
      throw { message: response.statusText, status: response.status }; 
  }
  const data = await response.json();

  if(data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("uid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail){
  const requestOptions = {
      method: "POST",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(authDetail)
  }  
  const response = await fetch(`${host}/register`, requestOptions);
  if(!response.ok){
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  
  if(data.accessToken){
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("uid", JSON.stringify(data.user.id));
  }

  return data;
}

export function logout(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("uid");
}

function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const uid = JSON.parse(sessionStorage.getItem("uid"));
  return { token, uid };
}

export const getUser = async () => {
  const browserData = getSession();
  const requestOptions = {
    method: "GET",
    headers: { 
      "Content-Type": "application/json", 
      Authorization: `Bearer ${browserData.token}` 
    }
  }
  const response = await fetch(`${host}/${browserData.uid}`, requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; 
  }
  const data = await response.json();
  return data;
}