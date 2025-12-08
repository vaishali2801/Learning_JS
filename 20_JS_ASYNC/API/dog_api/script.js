document.getElementById("btn").addEventListener("click",async()=>{
    try{
        const image = document.getElementById("img");
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        if(data.status !== "success"){
            throw new Error("failed to fetch");
        }
        image.src = data.message;

    }catch(error){
        console.log(error);
    }
})