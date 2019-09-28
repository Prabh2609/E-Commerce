var cloths=document.getElementById("clothing");
var productId=location.search.split("=");
productId=productId[1];
var access=$("#accessories");
var data;
var cartItem=[];

// COROUSEL ANIMATION USING SLICK
$('#corousel').slick({
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    autoplay:true
  });
 
  // FUNCTION TO GET DATA FROM BACKEND
function getData()
{
  var http=new XMLHttpRequest();
  http.onreadystatechange=function()
  {
    if(this.readyState===4)
    {
      if(this.status===200)
      {
        var response=JSON.parse(http.responseText);
        data=JSON.parse(http.responseText);
        for(var i=0;i<response.length;i++)
        {
          
          if(response[i].isAccessory==false)
          {
            cloths.appendChild(cardCreator(response[i]));
          }
          else
          {
            access.append(cardCreator(response[i]));
          }
        }
      }
      else
      {
        console.log("CALL FAILED")
      }
    }
  }

  http.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product");
  http.send();
}


// FUNCTION TO CREATE CARDS
function cardCreator(response)
{
  var next=document.createElement("a");
  next.href="./product_detail.html?p="+response.id;
  next.id=response.id;

   var card=document.createElement("div");
   card.className="card";

  var cardPic=document.createElement("img");
  cardPic.className="cardPic";
  cardPic.src=response.preview;

  var cardDetail=document.createElement("div");
  cardDetail.className="cardDetail";

  var cardName=document.createElement("h3")
  
  var cardNameValue=document.createTextNode(response.name);
  cardName.className="cardName";
  cardName.appendChild(cardNameValue);

  var cardBrand=document.createElement("h6")
  var cardBrandValue=document.createTextNode(response.brand);
  cardBrand.className="cardBrand";
  cardBrand.appendChild(cardBrandValue);

  var cardPrice=document.createElement("h4")
  var cardPriceValue=document.createTextNode("Price : Rs"+response.price);
  cardPrice.className="cardPrice";
  cardPrice.appendChild(cardPriceValue);

  cardDetail.appendChild(cardName);
  cardDetail.appendChild(cardBrand);
  cardDetail.appendChild(cardPrice);

  next.appendChild(cardPic);
  next.appendChild(cardDetail);
  card.appendChild(next);

   return card;
}

if(window.innerWidth<=720){$(".banner").css("height","40vh")}

getData();