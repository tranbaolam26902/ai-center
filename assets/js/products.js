var currentTabID = 0;
const productName = document.querySelector('#product-name');
const productImg = document.querySelector('#product-img');
const btnPrevious = document.querySelector('#btn-previous');
const btnForward = document.querySelector('#btn-forward');
const description = document.querySelector('.description');
const specification = document.querySelector('.specification');
productName.innerHTML = productsInfo[0].name;
productImg.src = productsInfo[0].img;
description.innerHTML = productsInfo[0].desc;
UpdateProductSpecification(0);
btnPrevious.addEventListener('click', () => {
    currentTabID--;
    if (currentTabID < 0) {
        currentTabID = productsInfo.length - 1;
    }
    UpdateProductDetails();
    UpdateProductSpecification(currentTabID);
});
btnForward.addEventListener('click', () => {
    currentTabID++;
    if (currentTabID > productsInfo.length - 1) {
        currentTabID = 0;
    }
    UpdateProductDetails();
    UpdateProductSpecification(currentTabID);
})
function UpdateProductDetails() {
    productName.innerHTML = productsInfo[currentTabID].name;
    description.innerHTML = productsInfo[currentTabID].desc;
    productImg.src = productsInfo[currentTabID].img;
}