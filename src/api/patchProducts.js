export const patchProducts = async (apiUrl, token, data, id) => {
  try {
    let options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/api/products/${id}`, options);
    let json = await res.json();
    return json;
  } catch (error) {
    let message =
      error.statusText || "Ocurrio un error al actualizar los datos";
    console.log(error);
    return message;
  }
};
