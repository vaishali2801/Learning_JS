
const api = () =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json()).then((user)=>console.log(user));
}
api();