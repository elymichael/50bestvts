export async function dataconfig() {
  let data = await fetch(process.env.BASE_URL + "/items.json")
    .then(response => response.json())
    .then(data => {
      return data;
    });
  return data;
}
