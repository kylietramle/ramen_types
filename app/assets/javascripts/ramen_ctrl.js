(function() {
  "use strict";
  angular.module("app").controller("ramenCtrl", function($scope, $http) { // http make web requests
      
    $scope.setup = function() {
      $http.get("api/v1/ramen_types.json").then(function(response) { //talk to own app
        $scope.ramen_types = response.data;   // set the response to the variable $scope.ramen_types
      });
  }
    $scope.addRamenType = function(name, soupBase, flavor, brothColor, otherIngredients) {
      var ramenType = {name: name, soupBase: soupBase, flavor: flavor, brothColor: brothColor, otherIngredients: otherIngredients}
      
      $http.post("api/v1/ramen_types.json", ramenType).then(function(response) { //talk to own app
        $scope.ramen_types.push(ramenType.data);   
        // IMPORTANT: (ramenType.data) show added data immediately, not after refresh
      });
    }
    
    window.$scope = $scope; // attach to DOM for debugging
  });
})();