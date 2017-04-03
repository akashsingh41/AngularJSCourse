(function() {
    'use strict';

    angular.module('MenuApp')
    .component('itemList',
		{
			templateUrl: 'src/menuapp/templates/items-list.template.html',
			bindings: {
				items: '<'
        }
    });

})();
