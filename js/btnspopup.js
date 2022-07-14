var btns = document.querySelectorAll(".btnch");
var showsh = document.createElement("div");//المشتريات
let total =0;//خزنة
var totalprice = document.getElementById("totalprice");
var productcontainer = document.querySelector(".rows");
var allproductbag = document.querySelector(".allproductbag");//الحاوية بالموقع اللي بتستقبل المشترايات 

var productarr =[
{   
    id: 1,
    imgsrc:"pictures/524042 (1).jpg",
    productname:"كبر دماغك",
    productdiscreption:"the best ever",
    productprice: "15$"
},
{   
    id: 2,
    imgsrc:"pictures/535247.jpg",
    productname:"ليطمئن قلبي",
    productdiscreption:"the best ever",
    productprice: "25$"
},
{   
    id: 3,
    imgsrc:"pictures/482852.jpg",
    productname:"قبل النسيان",
    productdiscreption:"the best ever",
    productprice: "35$"
},
{   
    id: 4,
    imgsrc:"pictures/jbb6360na007.jpg",
    productname:"فن اللامبالاة",
    productdiscreption:"the best ever",
    productprice: "12$"
}
];


function draw(){
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
            <button class="btn btn-primary btnch" onClick="addToCart(${item.id})">buy</button>
            <i class="align-self-center fa-regular fa-heart" style="cursor:pointer;"></i>
             <span class="price fs-4 text-danger fw-bold ">${item.productprice}</span>
        </div>
</div>
</div>`;
})
productcontainer.innerHTML += `${getproduct}`;
}
draw();//invoke variable function that draw items of product
///////////////////////////////////////////////////////////////////////////////

var procontain = document.querySelector(".procontain");//الحاوي الكبير

let addedItem = localStorage.getItem("addedItemInCart")? JSON.parse(localStorage.getItem("addedItemInCart")): [];// عملنا مصفوفة فاضية عشان نضيف فيها الالمنتجات المختارة
//اذا كان في قيم متخزنة هتهالي بعد ما تحولها لاوبجيكت ولو مافيش اديها قيمة فاضية 
let bridg = document.querySelector(".bridg");//العداد بتاع السلة للمشتريات 

if(addedItem){//اذا كان فيها قيم ومش فاضية
    addedItem.map((item)=>{
        console.log(item);
        procontain.innerHTML += `<p>${item.productname}</p>`;
    })
    bridg.style.display="block";
    bridg.innerHTML = addedItem.length;
    
    
}
if(localStorage.getItem=("username")){

function addToCart(id){
    let choosenItem = productarr.find((item) => item.id===id);//بندور ونبحث عن العنصر اللي العنوان بتاعه يطابق العنوان بالمصفوفة 
    procontain.innerHTML += `<p>${choosenItem.productname}</p>`;//بالتالي هيروح يجيب اسمه من المصفوفة ويضيفه في الحاوي 
    addedItem =[...addedItem, choosenItem];//عملنا مصفوفة فاضية نجمع فيها البرجراف اللي بينضاف في سلة المشتريات    
    localStorage.setItem("addedItemInCart", JSON.stringify(addedItem) );//ركبنا المشتريات اللي في السلة الباص عشان يوصلهم صفحة جديدة
     let bridglength = document.querySelectorAll("body > header > div > ul > li:nth-child(1) > div > div > p");//مسكت كل البرجرافات في مصفوفة وجبت الطول للمصفوفة 
    //  console.log(bridglength);
    bridg.style.display="block";//هتظهر لما نضغط على الزو ونستدعي الدالة 
     bridg.innerHTML=bridglength.length;//هيبتدي يعد العناصر اللي اشتريتها في السلة
     /////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////

{var popup = document.createElement("div");
document.body.append(popup);
popup.innerHTML="&#128525;      مبروووووووك";
popup.classList.add("popupdone");

setTimeout(()=>{
    popup.style.transform ="translateX(-60vw)";
}, 1500);
setTimeout(()=>{
    popup.remove();
}, 4000)
}
document.body.append(showsh);
showsh.classList.add("shownshop");
showsh.classList.add("btn", "btn-info", "text-light");
showsh.innerHTML= "عرض المُشتريات ";


// }); // Change button from "buy" to "Done
}//وطبعا هنروح نعمل عند الضغط على الزر اشتري المنتج
}else {
    window.location ="logein.html";
}
/////////////////////////////////////////////////////////////////////check user account

// function check(){
//     if(localStorage.getItem=("username")){
//         window.location = "trial.html";
     
//       }else {
//         window.location ="login.html";
//     }
// }

//////////////////////////////////////////////

var shopping =document.querySelector(".fa-cart-shopping");//button
var shopingparent =document.querySelector(".shopingparent");//الكبير اوي
shopping.addEventListener("click", ()=>{
    if(procontain != ""){
        if(shopingparent.classList.contains("d-none")){
            shopingparent.classList.remove("d-none");
            shopingparent.classList.add("d-block");
        }
        else{
            shopingparent.classList.remove("d-block");
            shopingparent.classList.add("d-none");
        }
    }
})
////////////////////////////////////////////////////////////////عربة التسوق اضغط يظهر اضغط  يختفي يقفل 

var btnch =document.querySelectorAll(".btnch");
btnch.forEach((btn)=>{
btn.addEventListener("click", ()=>{
    {btn.setAttribute("disabled", " ");
btn.classList.remove("btn-primary");
btn.classList.add("btn-success");
btn.innerHTML=" &#10004; Done";
} //  show mabrooook popup
})
})
///////////////////////////////////////////////////////////////////////////////////////هنا بيغير خصائص الزرار بعد مااضغط عليه



