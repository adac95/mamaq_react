import { API_URL } from "../variables";

export const getCartByUser = async (user) => {
  try {
    const res = await fetch(`${API_URL}/api/shoppingcart/${user.id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-access-token": user.token,
      },
    });
    const data = await res.json();
    return data.body
  } catch (error) {
    console.log(error);
  }
};
