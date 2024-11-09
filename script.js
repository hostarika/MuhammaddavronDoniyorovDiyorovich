const products=[
    {
        name:"Mars rug",
        coin:100
    },
    {
        name:"Keyboard Stiker",
        coin:49
    },
    {
        name:"Smart watch",
        coin:899
    },
    {
        name:"Wireless keyboard",
        coin:350
    },
    {
        name:"Mouse",
        coin:359
    },
    {
        name:"AirPods",
        coin:499
    },
    {
        name:"Powerbank",
        coin:899
    },
    {
        name:"Usb flesh driver",
        coin:299
    },
    {
        name:"Smartphone",
        coin:3699
    },
    {
        name:"Playstation 5",
        coin:7449
    },
    {
        name:"Yandex station",
        coin:1999
    },
    {
        name:"Planshet Samsung",
        coin:4999
    },

] 
const cardbox=document.getElementById("card-box")
const btn=document.getElementById("btn")
const input=document.getElementById("input")

function productsView(mahsulotlar){
    cardbox.innerHTML="";
    for(let i=0; i< mahsulotlar.length; i++){
        const card=document.createElement("div");
        card.classList.add("card")
        card.innerHTML=`
        <img src="./img/image 10 (1).png" alt="as">
                <h3 class="card__title">${mahsulotlar[i].name}</h3>
                <div class="coins">
                   <img src="./img/Coin 1.png" alt="sad">
                   <p>${mahsulotlar[i].coin}</p>
                </div>
                <p class="card__desc">24 dona mavjud</p>    
        `;
        cardbox.appendChild(card)

    }
}
productsView(products)



btn.addEventListener("click",()=>{
    if(input.value.trim().length<1){
        alert("Biron mahsulot kiriting")
    }else{
        let Muhammaddavron = products.filter((e,i) => e.name.toLowerCase().includes(input.value.trim()));
        productsView(Muhammaddavron)
    }
})