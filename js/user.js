var fresh = document.getElementById("refresh");//اللي بيحتوي على اللينكات التسجيل والدخول 
var deee = document.createElement("div");

if(localStorage.getItem("username")){//لو سجلت باسمك وبياناتك بياخد الاسم ويضيفه مكان اللينكات 
    fresh.innerHTML=" ";
    fresh.append(deee);// عملت ديف داخله عشان اسجل فيه الاسم للمستخدم وبداخله ديف اخرى لللسته
    deee.classList.add("update");
deee.innerHTML=localStorage.getItem("username");
}
var listd = document.querySelector(".divlist");// الليسته اللي تحت اسمك اللي مسجل بيه
deee.append(listd);//لازم تكون بداخلها عشان تظبط
listd.classList.add("d-none");
deee.addEventListener("mouseover", ()=>{
    listd.classList.remove("d-none");
    listd.classList.add("d-block");
})
deee.addEventListener("mouseout", ()=>{
    listd.classList.remove("d-block");
    listd.classList.add("d-none");
});
// fresh.style.padding="20px";
var firstlist = document.querySelector("#refresh > div > div > ul > li:nth-child(1)");
firstlist.addEventListener("click",()=>{
    localStorage.clear();
    setTimeout(()=>{window.location="logein.html";
}, 1500);
});
////////////////////////////////////////////////login signup

