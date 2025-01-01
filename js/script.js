const products = [
    { id: 1, name: "Reloj de lujo Bubble", price: "$110.000", description: "Para hombre, cronógrafo de cuarzo con esfera grande hueca.", image: "imagenes/WhatsApp Image 2025-01-01 at 10.33.06 AM.jpeg" },
    { id: 2, name: "Reloj automático LONGUX", price: "$200.000", description: "Diseño elegante para cualquier ocasión, acero inoxidable y resistente al agua.", image: "imagenes/WhatsApp Image 2025-01-01 at 11.40.25 AM.jpeg" },
    { id: 3, name: "Reloj + Pulsera + Collar", price: "$110.000", description: "Reloj de cuarzo Romano para hombre, pulsera de aleación, collar con cruz.", image: "imagenes/WhatsApp Image 2025-01-01 at 10.33.07 AM (1).jpeg" },
    { id: 4, name: "Reloj profesional VOOM", price: "$170.000", description: "De negocios de acero inoxidable para hombre, cronógrafo de lujo con brillo nocturno doble calendario, resistente.", image: "imagenes/WhatsApp Image 2025-01-01 at 10.33.06 AM (2).jpeg" },
    { id: 5, name: "Reloj GENEVA", price: "$90.000", description: "Reloj Geneva de cuarzo con correa de malla de acero inoxidable negro de lujo con pulsera para hombre, resistente combos.", image: "imagenes/WhatsApp Image 2025-01-01 at 10.33.07 AM.jpeg" }
];

const catalog = document.getElementById("productCatalog");

products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <img src="${product.image}" alt="Imagen de ${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <a href="https://wa.me/+573212239526?text=Estoy%20interesado%20en%20${encodeURIComponent(product.name)}" class="contact">Contactar por WhatsApp</a>
    `;

    catalog.appendChild(productElement);
});


// Botón flotante de contacto
const floatingContactBtn = document.getElementById("floatingContactBtn");
const floatingMenu = document.querySelector(".floating-menu");

floatingContactBtn.addEventListener("click", () => {
    floatingMenu.style.display = floatingMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
    if (!floatingMenu.contains(event.target) && event.target !== floatingContactBtn) {
        floatingMenu.style.display = "none";
    }
});
