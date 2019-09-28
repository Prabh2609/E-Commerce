var productId=location.search.split("=")[1];
var currProd;
console.log("Product Id : "+productId);

// $("#count").html(
//   JSON.parse(localStorage.getItem("cartItem")).length
// );

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+productId,function(data,status){
    currProd=data;
    console.log(data);
    setValue(data);
    for(var i=0;i<data.photos.length;i++)
    {
      $("#prvwContainer").append(preview(data.photos[i]))
      $(".prvwImg")[0].classList.add("activeClass")
      $(".prvwImg").click(function(){

      })
    }
})

function setValue(response)
{
  $("#previewImage").attr("src",response.preview);
  $("#descName").html(response.name);
  $("#descBrand").html(response.brand);
  $("#descPrice").html("Price : RS "+response.price);
  $("#descText").html(response.description);

}

function preview(photo,pos)
{
  var imageHolder=document.createElement("div");
  imageHolder.className="imageHolder";

  var image=document.createElement("img");
  image.src=photo;
  image.className="prvwImg";

  imageHolder.appendChild(image);

  image.onclick=function(){
    $(".prvwImg").removeClass("activeClass");
    image.classList.add("activeClass");
    $("#previewImage").attr("src",photo);
  }

  return imageHolder;
}

$("#btnAdd").click(function(){
  var productList=localStorage.getItem("cartItem");
  var foundAtpos=-1;
  productList=productList!=null?JSON.parse(productList):[];
  // $("#count").html(productList.length);
  
  console.log(productList);
  

  for(var i=0;i<productList.length;i++)
  {
    if(productList[i].id == currProd.id)
    {
      foundAtpos=i;
    }
  }
  if(foundAtpos>-1)
  {
    productList[foundAtpos].count=productList[foundAtpos].count+1;
    localStorage.setItem('cartItem',JSON.stringify(productList));
    console.log("FOUND")
  }
  else
  {
    currProd.count=1;
    productList.push(currProd);
    localStorage.setItem('cartItem',JSON.stringify(productList));
  }
  var totalItems=0;
  for(var i=0;i<productList.length;i++)
  {
    totalItems+=productList[i].count;
  }

  console.log(currProd);
  $("#count").html(totalItems);
})
