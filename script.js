 var Btn_add = document.getElementById("plus"); 
 var Btn_sub = document.getElementById("minus"); 
 var Count = document.getElementById("count");
 var count = 0;

 Btn_add.addEventListener("click", () => {
    count = count + 1;
    Count.innerText = count;
 });

 Btn_sub.addEventListener("click",() => {
    count = count - 1;
    Count.innerText = count - 1;
 });

 var Empty = document.getElementById("empty-cart");
 var Full = document.getElementById("full-cart");
 var cartBtn = document.getElementById("cart-btn");
 var Delete = document.getElementById("del");
 var CartShow = document.getElementById("cart-show");
 var Cart = document.getElementById("cart-fnc");

 cartBtn.addEventListener("click",() => {
   Full.style.display = 'block';
   Empty.style.display = 'none';
   });
 
 Delete.addEventListener("click",() => {
   Full.style.display = 'none';
   Empty.style.display = 'block';
 });

 CartShow.addEventListener("click",() => {
   if (Cart.style.display == 'none') {
      Cart.style.display = 'block';
   }
   else {
      Cart.style.display = 'none';
   } 
 });