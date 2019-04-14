var orderModalWindow = document.getElementById("modal-center");
var planList = [];
planList = document.getElementsByClassName("plan");
var orderModalHeader = document.getElementsByClassName("uk-modal-header");

var orderText = document.createElement("p");
var orderPrice = document.createElement("span");
var text;
var price;

for(var i = 0; i < planList.length;i++) {
  planList[i].onclick = function(event) {
    var target = event.target; // где был клик?

    if (target.tagName != 'A') return; // не на TD? тогда не интересует

    text = target.parentElement.children[0].innerText;
    price = target.parentElement.children[1].firstElementChild.innerText;

    orderText.innerHTML = text;
    orderText.style.fontWeight = "bold";
    orderText.style.fontSize = "24px";
    orderModalHeader[0].appendChild(orderText);

    orderPrice.innerHTML = "Цена: " + price;
    orderPrice.style.fontWeight = "bold";
    orderPrice.style.fontSize = "24px";
    orderModalHeader[0].appendChild(orderPrice);
  };
}



