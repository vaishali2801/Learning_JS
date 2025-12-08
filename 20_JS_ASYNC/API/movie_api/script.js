document.getElementById("form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try{
        const movieName = document.getElementById("input").value;
        const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`)

        const data = await res.json();
        console.log(data);
        
        if(data.Response === "True" ){
            const container = document.getElementById("container")
            data.Search.forEach((movie)=>{
                const image = document.createElement("img");

                image.src = movie.Poster;
                image.Title = movie.Title;
                image.style.width = "210px";
                image.style.margin = "13px";

                container.appendChild(image)
            })
        }else{
            const container = document.getElementById("container");
            container.innerHTML = `<h1>no match found</h1>`;
            throw new Error("failed to fetch"); 
        }
    }catch(error){
        console.log(error);
    }
})