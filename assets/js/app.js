const bestsellerlist = document.getElementsByClassName("bestseller__slider")[0];
const relatedlist = document.getElementsByClassName("cards")[0];
const basketCount = document.getElementsByClassName("backet--count")[0];
// Get BestSellers
$.getJSON( bestsellerlist.getAttribute("data-uri"), function( data ) {
    createCard("bestseller__slider", data);
});
// Get Related
$.getJSON( relatedlist.getAttribute("data-uri"), function( data ) {
    data = data.slice(0,10);
    createCard("cards", data);
});

function createCard(className, data){
    data.forEach(d => {
        let element = document.createElement("product-card");
        element.setAttribute("title", d.title);
        element.setAttribute("img", d.img);
        element.setAttribute("cur", d.cur);
        element.setAttribute("code", d.code);
        element.setAttribute("price", d.price.toFixed(2));
        element.setAttribute("rating", d.rating.toFixed(1));
        element.setAttribute("comment", d.comment);
        element.setAttribute("sameday", d.samedayshipping);
        element.setAttribute("state", d.attr8); //web
        element.setAttribute("live", d.attr9); //not null
        element.setAttribute("stock", d.attr10); //not null
        document.querySelector("div."+className).append(element);
    });
}

function scrollSliderPrev(){
    $("#cardSlider").animate({
        scrollLeft:  $("#cardSlider").scrollLeft() - 224
    }, 'fast');
}
function scrollSliderNext(){
    $("#cardSlider").animate({
        scrollLeft:  $("#cardSlider").scrollLeft() + 224
    }, 'fast');
}
