var productList = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, prodImg: "images/fingerTooth.jpg"}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57, prodImg: "images/barryM.jpg"}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, prodImg: "images/ramenOreos.jpg"}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, prodImg: "images/woofWasher.jpeg"}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, prodImg: "images/saunaPants.jpg"}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, prodImg: "images/hugPillow.jpg"}];

for(var i = 0; i<productList.length; i++){
  //console.log(productList[i]);
  var productElems = document.createElement("div");
  productElems.className = "products";
//productElems.innerHTML = productList[i];
main.appendChild(productElems);
//console.log(productElems);

var productName = document.createElement("div");
productName.className = "names";
productName.innerHTML = productList[i].product;
productElems.appendChild(productName);

var productImg = document.createElement("img");
productImg.className = "images";
productImg.src = productList[i].prodImg;
productElems.appendChild(productImg);
console.log(productImg);

var productDesc = document.createElement("div");
productDesc.className = "descriptions"
productDesc.innerHTML = productList[i].description;
productElems.appendChild(productDesc);

var productPrice = document.createElement("div");
productPrice.className = "prices";
productPrice.innerHTML = productList[i].price;
productElems.appendChild(productPrice);

var prodElems = document.getElementsByClassName("names");
for(var i = 0; i<prodElems.length; i++){
prodElems[i].addEventListener("click", showHide);
}
function showHide(){
  var hideDesript = this.querySelectorAll(".descriptions")[0];
  if(hideDesript.style.display === "none"){
    hideDesript.style.display = "block";
  }else{
    hideDesript.style.display = "none"; 
  }
}
}