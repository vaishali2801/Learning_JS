
//Fetch API is a modern way in JavaScript to request data from a server (like APIs) and handle the response.
//It works with Promises, which makes it easier than older methods like XMLHttpRequest.

//using promise
// const run = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(json => console.log(json))
// }
// run();

//using async await
async function fetchData() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data =await res.json();
        console.log(data.map((user)=>user.username));
        if(!data.ok){
            throw new Error("failed......!")
        }
    }catch(error){
        console.log(error);
    }
}
fetchData();