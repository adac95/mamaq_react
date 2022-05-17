export const postData = async(apiUrl,token,data) => {
    try {
        let options = {
            method: "POST",
            headers: {"x-access-token": token},
            body: data
        };
        let res = await fetch(apiUrl, options);
        let json = await res.json();
        return json

    } catch (error) {
        let message = error.statusText || "Ocurrio un error al enviar los datos"
        console.log(error)
        return message;
    }
}