class Product {
    constructor(oParam, oIndex) {
        this.productDetails = oParam;
        this.oIndex = oIndex;
        this.createProduct(this.productDetails);
        this.brandColors(this.productDetails, oIndex);
    }
    createProduct(productDetails) {
        var oCard = this.render(productDetails);

        var div = document.createElement("div");
        div.classList.add("card");
        div.setAttribute('id', `card-${this.oIndex}`)
        div.setAttribute('onmouseenter', `cardsEnter(${this.oIndex})`)
        div.setAttribute('onmouseleave', `cardsOut(${this.oIndex})`)


        div.innerHTML = oCard.trim();
        document.getElementsByClassName("main-card")[0].appendChild(div);
    }

    render(productDetails) {

        const newCard =
            `
         <div class="grid-container">
           
        </div>
        <ul>
            <li id="images-${this.oIndex}">
              
            </li>
            <li class="title">
                ${productDetails.title}
            </li>
            <li class="section">
                ${productDetails.description}
            </li>
            <li>
                <strong class="price">
                    ${productDetails.price},00$
                </strong>
            </li>
            <li>
                <div class="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </li>
        </ul>
        <div class="brand">
            ${this.firstUpperCase(productDetails.brand)}
        </div>
        <i onclick="cardRemove(${this.oIndex})" id="delete-${this.oIndex}" style=" display: none; " class="delete fa-solid fa-trash-can"></i>

        `
        return newCard;
    }


    firstUpperCase(str) {
        const words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }


        return words.join(" ");
    }

    randomColor() {
        return Math.floor(Math.random() * 16777215).toString(16)
    }

    brandColors(productDetails, oIndex) {

        // Brandların arka planı boyanıyor
        for (let j = 0; j < filteredBrand.length; j++) {
            if (productDetails.brand.toLowerCase() == Object.keys(filteredBrand[j])) {
                document.getElementsByClassName('brand')[oIndex].style.cssText = `background-color: #${Object.values(filteredBrand[j])}`
            }
        }
        for (let j = 0; j < filteredBrand.length; j++) {
            if (productDetails.brand.toLowerCase() == Object.keys(filteredBrand[j])) {
                document.getElementsByClassName('price')[oIndex].style.cssText = `color: #${Object.values(filteredBrand[j])}`
            }
        }
    }
}

