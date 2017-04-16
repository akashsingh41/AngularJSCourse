(function () {
    "use strict";

    angular.module('public')
    .service('DataService', DataService);

    DataService.$inject = ['$http', 'apiPath', 'MenuService'];
    function DataService($http, apiPath, MenuService)
    {
        var service = this;

        service.info = {};

        service.setInfo = function (informations)
        {
            service.info = informations;
        };

        service.getInfo = function ()
        {
            return service.info;
        };

        service.infoSaved = function ()
        {
            if (service.info == undefined)
            {
                return false;
            }
            return (service.info.firstName != undefined);
        };

        service.getMenuItem = function()
        {
            if (service.info.menuItemLoaded == undefined && service.info.menuItem != undefined) {
                MenuService.getMenuItem(service.info.menuItem)
                .then(function (result)
                {
                    service.info.menuItemLoaded = result.data;
                },
                function (result)
                {
                    service.info.menuItemLoaded = undefined;
                });
            }
        };

        service.retrieveMenuItem = function (shortName)
        {
            return MenuService.getMenuItem(shortName);
        };
    }

})();
