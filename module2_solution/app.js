(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  var toBuyList = this;
  toBuyList.emptyMessage = "Everything is bought!";
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.moveBoughtItem = function(itemName, itemQuantity, itemIndex)
  {
    ShoppingListCheckOffService.moveBoughtItem(itemName, itemQuantity, itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var alreadyBoughtList = this;
  alreadyBoughtList.emptyMessage = "Nothing bought yet";
  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList();
}

function ShoppingListCheckOffService()
{
  var service = this;
  var itemsToBuyList=[
    {name: "Milk",    quantity: "2 Litres"},
    {name: "Bread",   quantity: "1 Packet"},
    {name: "Eggs",    quantity: "24"},
    {name: "Cookies", quantity: "5 Bags"},
    {name: "Onion",   quantity: "1 Kg"}
  ];

  var itemsAlreadyBought =[];

  service.moveBoughtItem = function(itemName, itemQuantity, itemIndex)
  {
    service.removeItem(itemIndex,itemsToBuyList);
    service.addItem(itemName, itemQuantity, itemsAlreadyBought);
  };

  service.getToBuyItems = function()
  {
    console.log(itemsToBuyList);
    return itemsToBuyList;
  };

  service.getAlreadyBoughtList = function()
  {
    return itemsAlreadyBought;
  };

  service.removeItem = function(itemIndex, itemList)
  {
    itemList.splice(itemIndex, 1);
    return itemList;
  };

  service.addItem = function(itemName,itemQuantity,itemList)
  {
    var item = {name:itemName, quantity: itemQuantity}
    itemList.push(item);
    return itemList;
  };

  service.getToBuyMessage = function()
  {
    if(itemsToBuyList.length==0)
    {
      return "Everything is bought!";
    }
    else
    {
      return "";
    }
  };

  service.getAlreadyBoughtMessage = function()
  {
    if(itemsAlreadyBought.length==0)
    {
      return "Nothing bought yet";
    }
    else {
      return "";
    }
  };

}

})();
