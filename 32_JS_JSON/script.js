
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
//parse - string to object convert
//stringify- object to string convert
let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

// show all card
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

// add to card function
function addItem(id) {
    const item = cartItems.find(prod => prod.id === id);

    if (item) {
        item.qty++;
    } else {
        const product = products.find(prod => prod.id === id);
        cartItems.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cardData", JSON.stringify(cartItems));
    alert("Item added to cart");
}

//show modal
const showCart = () => {
    const productList = document.getElementById("myModal");
    const modal = new bootstrap.Modal(productList)
    modal.show();
    productData();
}

//data show
const productData = () => {
    const productData = document.getElementById("product-data");
    productData.innerHTML = "";

    cartItems.forEach((p) => {
        productData.innerHTML += `<tr>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td>
    <button class="btn btn-info btn-sm" onclick="decreaseQTY(${p.id})">-</button>
    <span class="mx-2 fw-bold">${p.qty}</span>
    <button class="btn btn-info btn-sm" onclick="increaseQTY(${p.id})">+</button>
    
    </td>
    <td> ₹ ${p.qty * p.price}</td>
    <td><button class="btn btn-sm btn-danger" onclick="removeItem(${p.id})">Remove</button></td>
    </tr>`;
    });
}
//localstorage function
const updateLocalStorage = () => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    productData();
    GrandTotal();

}
//decrease quantity function

const decreaseQTY = (id) => {
    const item = cartItems.find((prod) => prod.id === id);

    if (item) {
        item.qty--;
    }
    if (item.qty === 0) {
        cartItems = cartItems.filter(prod => prod.id !== id);
    }

    updateLocalStorage();
}
//increase quantity function
const increaseQTY = (id) => {
    const item = cartItems.find((prod) => prod.id === id);

    if (item) {
        item.qty++;
    }
    updateLocalStorage();
}
//remove item
const removeItem = (id) => {
    cartItems = cartItems.filter(prod => prod.id !== id);
    updateLocalStorage();
};
//total
const GrandTotal = () => {
    const totalAmount = cartItems.reduce((acc, curr) => {
        return (acc += curr.price * curr.qty);
    }, 0);
    document.getElementById("total").innerHTML =
        `<h5>Total:₹${totalAmount}</h5>`;
}
//checkout function
const checkout = () =>{
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items before checkout.");
        return;
    }
    cartItems = [];
    localStorage.removeItem("cartData");

    productData();
    GrandTotal();
}