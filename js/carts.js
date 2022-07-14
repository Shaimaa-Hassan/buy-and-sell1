let addedproducts =localStorage.getItem("addedItemInCart");
var allproductbag =document.querySelector(".allproductbag");
let items;
if(addedproducts){
     items = JSON.parse(addedproducts);//convert it into objects 
    drawproducts(items);//اعطينا الدالة المصفوفة اللي جبناها من هناك بالجيسون 
}

function drawproducts(productarr){

    var getproduct =productarr.map((item)=>{//variable function
        console.log(item);
    return ` <div class="card mt-4" style="width: 18rem;">
        <img src="${item.imgsrc}" class="card-img-top pt-3" alt="pic1">
        <div class="card-body">
            <h5 class="card-title text-info fw-bold" style="text-shadow: 2px 2px 0px black;" dir="rtl"
                lang="ar">${item.productname}</h5>
            <p class="card-text fs-6" dir="rtl" lang="ar">${item.productdiscreption}
            </p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary btnch" onClick =deleteFromCart(${item.id}) >delete</button>
                <input class="input border-info border-1 ps-1 rounded" type="number" value=1 min=1 style="width:40px;">
                 <span class="price fs-4 text-danger fw-bold ">${item.productprice}</span>
            </div>
    </div>
    </div>`;
    })
    
    allproductbag.innerHTML += `${getproduct}`;
    
}
//////////////////////////////////////////////////////////////////////////calculate total price
var totalprice = document.getElementById("totalprice");
var allProductsInBlackScreen =  document.querySelectorAll(".card");

var updateTotalPrice = () => {
    console.log(allProductsInBlackScreen);
    let total = 0;

    allProductsInBlackScreen.forEach(item => {
    var price = parseInt(item.getElementsByClassName("price")[0].innerText);//screenblack price
    var quantity = parseInt(item.getElementsByClassName("input")[0].value);
    total +=parseInt(price*quantity);
    totalprice.innerText = `    ${total}    `;
});




}


allproductbag.addEventListener("change", (eo) => {
    updateTotalPrice();
})//مع اي تغيير بيحسب المنتجات من جديد ويستدعي الدالة 

updateTotalPrice();//عشان يحسب المنتجات اول ماانقلها الصفحة ويشغل الدالة 
/////////////////////////////////////////////////////////////////////////////////////////delete
// function deleteFromCart(id){
//     var choosenItem = items.find((item)=> item.id===id)//بنحذف الاقواس للدالة السهم في حالة لو كانت سطر واحد فقط من الاوامر
//     localStorage.removeItem(`addedItemInCart[${id}]`)
// }
var btnch =document.querySelectorAll(".btnch");
btnch.forEach((eo)=>{
    eo.addEventListener("click",(epo)=>{
        epo.preventDefault();
        epo.target.parentElement.parentElement.parentElement.remove();
        updateTotalPrice();

    })
    updateTotalPrice();

})