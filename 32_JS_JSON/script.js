
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 3999,
        image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
    },
    {
        id: 3,
        name: "DSLR Camera",
        price: 45999,
        image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    },
    {
        id: 4,
        name: "Laptop",
        price: 65999,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    {
        id: 5,
        name: "Gaming Mouse",
        price: 1499,
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 2999,
        image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg"
    },
    {
        id: 7,
        name: "Mechanical Keyboard",
        price: 2199,
        image: "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg"
    },
    {
        id: 8,
        name: "Smartphone",
        price: 19999,
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
        id: 9,
        name: "Tablet",
        price: 28999,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
    },
    {
        id: 10,
        name: "Power Bank",
        price: 1299,
        image: "./pexels-goumbik-518530.jpg"
    },
    {
        id: 11,
        name: "Fitness Band",
        price: 1799,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
    },
    {
        id: 12,
        name: "Wireless Earbuds",
        price: 2299,
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg"
    },
    {
        id: 13,
        name: "Desktop Monitor",
        price: 15999,
        image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
    },
    {
        id: 14,
        name: "Web Camera",
        price: 3499,
        image: "./pexels-fox-58267-225157.jpg"
    },
    {
        id: 15,
        name: "Printer",
        price: 11999,
        image: "./pexels-blue-bird-7218517.jpg"
    }
];

const productList = document.getElementById("product-list");

// LOAD CART FROM LOCAL STORAGE
let cardItems = JSON.parse(localStorage.getItem("cardData")) || [];
products.forEach((p) => {
    productList.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card card-product">
                <img src="${p.image}" class="card-img-top" alt="${p.name}">
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">Price : ₹${p.price}</p>
                    <button class="btn btn-success" onclick="addItem(${p.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
});
function addItem(id) {
    const item = cardItems.find(prod => prod.id === id);

    if (item) {
        item.qty++;
    } else {
        const product = products.find(prod => prod.id === id);
        cardItems.push({ ...product, qty: 1 });
    }

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("cardData", JSON.stringify(cardItems));

    console.log(cardItems);
    alert("Item added to cart");
}
