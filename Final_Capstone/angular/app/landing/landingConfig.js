angular.module('Share_Health')
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "LandingCtrl",
        templateUrl: "/app/landing/landing.html"
      })
  })