(function() {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['result'];
    function ItemsController(result)
	{
        var controller = this;
        controller.items = result.menu_items;
        controller.category = result.category;
        console.log("Items: "+controller.category);
    }

})();
