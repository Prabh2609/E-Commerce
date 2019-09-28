$(document).ready(function()
{
    var productList=localStorage.getItem("cartItem");
    productList=productList!=null?JSON.parse(productList):[];
    var totalItems=0;
    for(var i=0;i<productList.length;i++)
    {
        totalItems+=productList[i].count;
    }
    $("#count").html(totalItems);
})
