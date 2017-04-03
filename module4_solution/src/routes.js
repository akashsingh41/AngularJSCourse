(function()
{
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/');

    //setup UI states
    $stateProvider
    .state('home',
    {
      url:'/',
      templateUrl:'src/menuapp/templates/home.template.html'
    })
    .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/categories.template.html',
            controller: 'CategoriesController as categoriesController',
            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    //console.log('resolve');
                    //console.log(MenuDataService.getAllCategories());
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{categoryId}',
            templateUrl: 'src/menuapp/templates/items.template.html',
            controller: 'ItemsController as itemDetail',
            resolve: {
                result: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryId);
                }]
            }
        });
}
})();
