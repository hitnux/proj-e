const template = document.getElementById("card");

class Card extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    setTimeout(() => {
      this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("title");
    }, 10);
    setTimeout(() => {
      this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    }, 10);
    setTimeout(() => {
      this.shadowRoot.querySelector("h2").innerHTML = this.getAttribute("cur")+" "+this.getAttribute("price");
    }, 10);
    setTimeout(() => {
      this.shadowRoot.querySelector("span.card__rating--text").innerHTML = this.getAttribute("rating");
      this.shadowRoot.querySelector("span.card__rating--comment").innerHTML = " ("+this.getAttribute("comment")+" Yorum)";
    }, 10); 
    setTimeout(() => {
      this.shadowRoot.querySelector("b").innerHTML = this.getAttribute("code");
    }, 10); 
    setTimeout(() => {
      if(this.getAttribute("stock")!=""){
        this.shadowRoot.querySelector("span.stock").style.display = "block";
      }else{
        this.shadowRoot.querySelector("span.stock").style.display = "none";
      }
    }, 10); 
    setTimeout(() => {
      if(this.getAttribute("sameday") === "true"){
        this.shadowRoot.querySelector("div.sameday").style.display = "block";
      }else{
        this.shadowRoot.querySelector("div.sameday").style.display = "none";
      }
    }, 10);
    setTimeout(() => {
      if(this.getAttribute("live")!=""){
        this.shadowRoot.querySelector("div.card__header--drawer").style.display = "block";
      }else{
        this.shadowRoot.querySelector("div.card__header--drawer").style.display = "none";
      }
    }, 10); 
    setTimeout(() => {
      if(this.getAttribute("state")=="web"){
        this.shadowRoot.querySelector("span.state").style.display = "block";
      }else{
        this.shadowRoot.querySelector("span.state").style.display = "none";
      }
    }, 10); 
  }
  connectedCallback(){
    this.shadowRoot.querySelector("button").addEventListener("click",()=>{
      document.getElementsByClassName("backet--count")[0].innerHTML = parseInt(document.getElementsByClassName("backet--count")[0].innerHTML)+1;
    });
  }
}
window.customElements.define("product-card", Card);
