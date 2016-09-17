angular.module('Share_Health')
  .config($routeProvider => {
    $routeProvider
      .when('/exercise', {
        controller: 'ExerciseCtrl',
        templateUrl: '/app/user_app/exercise/exercise.html'
      })
      .when('/exercise/:exerciseId', {
        controller: 'ExerciseDetailCtrl',
        templateUrl: '/app/user_app/exercise/exerciseDetail.html'
      })
  })