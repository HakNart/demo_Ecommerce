function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const uid = JSON.parse(sessionStorage.getItem("uid"));
  return { token, uid };
}

// export const getUser = async () => {
//   const browserData = getSession();
//   const requestOptions = {
//     method: "GET",
//     headers: { 
//       "Content-Type": "application/json", 
//       Authorization: `Bearer ${browserData.token}` 
//     }
//   }
//   const response = await fetch(`http://localhost:8001/users/600/users/${browserData.uid}`, requestOptions);
//   if (!response.ok) {
//     throw { message: response.statusText, status: response.status }; 
//   }
//   const data = await response.json();
//   return data;
// }

export async function getUserOrders(){
  const browserData = getSession();
  const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
  }
  const response = await fetch(`http://localhost:8001/users/660/orders?user.id=${browserData.uid}`, requestOptions);
  if(!response.ok){
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user){
  const browserData = getSession();
  const order = {
      cartList: cartList,
      amount_paid: total,
      quantity: cartList.length,
      user: {
          name: user.name,
          email: user.email,
          id: user.id
      }
  }
  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
      body: JSON.stringify(order)
  }
  const response = await fetch(`http://localhost:8001/660/orders`, requestOptions);
  if(!response.ok){
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}