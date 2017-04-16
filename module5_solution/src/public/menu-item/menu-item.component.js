(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['apiPath'];
function MenuItemController(apiPath) {
  var $ctrl = this;
  $ctrl.basePath = apiPath;
}

})();
