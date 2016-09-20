angular.module('Share_Health')
  .config(($routeProvider) => {
    $routeProvider
      .when("/nutrition", {
        controller: "NUtritionCtrl",
        templateUrl: "/app/user_app/nutrition/nutrition.html"
      })
      .when("/nutrition/:nutritionId", {
        controller: "NutritionDetailCtrl",
        templateUrl: "/app/user_app/nutrition/nutritionDetail.html"
      })
  })