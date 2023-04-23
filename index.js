const apiBase = "https://work.bynelly.no";
const woocommerceBase = "/wp-json/wc/store";
const productBae = "/products";

const pageBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pageBase;
const fullProductURL = apiBase + woocommerceBase + productBae;
const fullProductURLExample = "https://work.bynelly.no/wp-json/wc/store/products";

async function getProducts() {
   const response = await fetch(fullProductURL);

   const products = await response.json();

   return products
}

 function createProductHTML(product) {
    const container = document.querySelector("container");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    

    for (let i = 0; i < product.images.length; i++){
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
    }
    

    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title)

    container.append(productContainer)

 }

 function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product)
    }
 }

 async function main() {
    const products = await getProducts()
    createProductsHTML(products)
 }

 

 prodctPage()