(function() {
  "use strict";
  angular.module("app").controller("ramenCtrl", function($scope, $http) { // http make web requests
      
    $scope.setup = function() {
      $http.get("api/v1/ramen_types.json").then(function(response) { //talk to own app
        $scope.ramen_types = response.data;   
        // set the response to the variable $scope.ramen_types
      });
  }
    $scope.addRamenType = function(name, soupBase, flavor, brothColor, otherIngredients) {
      var ramenType = {name: name, soup_base: soupBase, flavor: flavor, broth_color: brothColor, other_ingredients: otherIngredients} 
      //key(snake_case) has to match API rails
      //value has to match parameters passed in
      
      $http.post("api/v1/ramen_types.json", ramenType).then(function(response) { 
      //talk to own app with api call
        $scope.ramen_types.push(response.data);   
        // IMPORTANT: (response.data) show added data immediately, not after refresh
      }, function(error) {
        $scope.errors = error.data.errors;
      });
    }
    
    $scope.deleteRamenType = function(ramenType) {
      $http.delete("api/v1/ramen_types/" + ramenType.id + ".json").then(function(response) {
        // delete front-end to match with the request from back end

        var index = $scope.ramen_types.indexOf(ramenType) // MAKE CHANGES
        $scope.ramen_types.splice(index, 1);
      });
    }

    window.$scope = $scope; // attach to DOM for debugging
  });
})();