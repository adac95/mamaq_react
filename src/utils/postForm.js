export const postForm = async (e, url,token) => {
  e.preventDefault();
  try {
    const formData = new FormData(e.target);
    const options = {
      method: "POST",
      body: formData,
      headers: {
        "x-access-token": token ? token : null
      }
    };
    let res = await fetch(url, options);

    if (!res.ok) {
      return res.statusText;
    }

    let json = await res.json();
    return json;
  } catch (error) {
    return JSON.stringify(error);
  }
};
