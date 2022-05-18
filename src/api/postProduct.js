export const postProduct = async (apiUrl, token, data, contentType) => {
  try {
    let options = {
      method: "POST",
      headers: contentType
        ? {
            "x-access-token": token,
            "Content-type": "application/json; charset=utf-8",
          }
        : {
            "x-access-token": token,
          },
      body: JSON.stringify(data),
    };
    let res = await fetch(apiUrl, options);
    let json = await res.json();
    return json;
  } catch (error) {
    let message = error.statusText || "Ocurrio un error al enviar los datos";
    console.log(error);
    return message;
  }
};
