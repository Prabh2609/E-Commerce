$(document).ready(function(){
    console.log("HI");
    var cartList=JSON.parse(localStorage.getItem("cartItem"));
    var mainList=$("#list");
    var totalPrice=0;
    console.log(cartList);
    var ul=document.createElement("ul");
    for(var i=0;i<cartList.length;i++)
    {
        var listItem=document.createElement("li");
        listItem.className="listItem"

        var imgDiv=document.createElement("div");
        imgDiv.id="preview";

        var preview=document.createElement("img");
        preview.setAttribute("src",cartList[i].preview);
        preview.id="previewImage";
         
        imgDiv.appendChild(preview);

        listItem.appendChild(imgDiv);
        listItem.appendChild(listData(cartList[i]));
        // listItem.appendChild(listName);
        // listItem.appendChild(amount);
        // listItem.appendChild(price);
        ul.appendChild(listItem);
        
        

    }
    mainList.append(ul);

    var productList=localStorage.getItem("cartItem");
    productList=productList!=null?JSON.parse(productList):[];
    var totalItems=0;
    for(var i=0;i<productList.length;i++)
    {
        totalItems+=productList[i].count;
    }
    $("#total").html("Total Items : " + totalItems)

    function listData(cart)
    {
        var listDiv=document.createElement("div");
        listDiv.id="listDiv";

        var listName=document.createElement("h3");
        var name=document.createTextNode(cartList[i].name);
        listName.appendChild(name);
        listName.id="descName"
        listName.style.fontSize="24px";
        listName.style.marginTop="10px";

        var amount=document.createElement("p")
        var amountData=document.createTextNode("Quantity : "+cartList[i].count);
        amount.appendChild(amountData);
        amount.id="amount";

        var price=document.createElement("p")
        var priceData=document.createTextNode("Amount : "+cartList[i].price + " * " + cartList[i].count +"= "+(cartList[i].count*cartList[i].price));
        price.appendChild(priceData);
        price.id="chckPrice"

        totalPrice+=cartList[i].count*cartList[i].price;

        listDiv.appendChild(listName);
        listDiv.appendChild(amount);
        listDiv.appendChild(price);

        return listDiv;
    }
    $("#priceCard h4").html( "Price : " + totalPrice );
})