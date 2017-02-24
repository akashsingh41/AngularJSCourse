
(function ()
{
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope)
  {
    $scope.outputMessage = "";
	
    $scope.lunchCheck = function()
    {
      if($scope.items)
      {
	  $scope.outputClass = "success_output";
	  $scope.inputClass = "success_input";
      var itemList = $scope.items.split(/\s*,\s*/);
	  var filteredItemList = itemList.filter(i=>i !=="");
      if(filteredItemList.length>3)
        $scope.outputMessage = "Too Much!";
      else
        $scope.outputMessage = "Enjoy!";
      }
      else {
		$scope.outputClass = "error_output";  
		$scope.inputClass = "error_input";
        $scope.outputMessage = "Please enter data first!!!";
		   }
	$scope.reset=function()
	{
		$scope.outputMessage="";
		$scope.items="";
		$scope.inputClass="input";
	}
    };
  }
})();
