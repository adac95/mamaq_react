export const deleteProduct = async (apiUrl, token, id) => {
  try {
    let options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-access-token": token,
      },
    };
    let res = await fetch(`${apiUrl}/api/products/${id}`, options);
    let json = await res.json();
    if (!res.ok) {
      throw new Error({ status: res.status, statusText: res.statusText });
    }
    return json;
  } catch (err) {
    let message = err.statusText || "Ocurrió un error al elimnar los datos";
    console.log(err);
    return message;
  }
};
