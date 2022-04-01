export default async function GetProducts() {
  const options = {
    method: "GET",
  };
  const res = await fetch("http://mamaq.herokuapp.com/api/products", options);
  const json = await res.json();
  return json
}


