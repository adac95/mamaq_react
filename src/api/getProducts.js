import { API_URL } from "../variables.js";

export default async function GetProducts() {
  const options = {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  };
  const res = await fetch(`${API_URL}/api/products`, options);
  const json = await res.json()
  return json
}


