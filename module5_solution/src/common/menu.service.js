(function()
{
  "use strict";

  angular.module('common')
  .service('MenuService',MenuService);

  MenuService.$inject = ['$http', 'apiPath'];
  function MenuService($http, apiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(apiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };
  service.getMenuItems = function (category)
  {
    var config = {};
    if (category)
    {
      config.params = {'category': category};
    }

    return $http.get(apiPath + '/menu_items.json', config).then(function (response)
    {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
            var url = apiPath + '/menu_items/' + shortName.toUpperCase() + '.json';
            console.log('getMenuItem:url=' + url);
            return $http.get(url)
                .then(function (response) {
                    console.log('getMenuItem:resolve');
                    console.log(response);
                    return response;
                },
                function (reject) {
                    console.log('getMenuItem:Error');
                    console.log(reject);
                });

  }

}

})();
