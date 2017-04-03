(function (){

	'use strict';

	angular.module('MenuApp')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http)
	{
		var service = this;
		service.getAllCategories = function()
		{
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/categories.json'
			}).then(function(result)
			{
				//console.log(result.data);
				return result.data;
			}, function(result)
			{
				console.log('Error :'+result);
			});
		};

		service.getItemsForCategory = function(categoryShortName)
		{
			return $http(
			{
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
				params:
				{
					category : categoryShortName
				}
			}).then(function(result)
			{
				return result.data;
			}, function(result)
			{
				console.log('Error :'+result);
			});
		};
	}

})();
