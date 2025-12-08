document.getElementById("btn").addEventListener("click",async()=>{
    try{
        const image = document.getElementById("img");
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        if (data.status !== "success") throw new Error("Failed to fetch");

        image.src = data.message;
        image.style.display = "block";

    }catch(error){
        console.log(error);
    }
})