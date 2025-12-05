
async function getData() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        console.log(data);

        document.getElementById("dogImage").src = data.message;
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
