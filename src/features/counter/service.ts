export const getJson = () => {
  fetch('https://jsonplaceholder.typicode.com/todos?userId=1&id=1')
    .then((response) => response.json())
    .then((json) => console.log(json))
}
