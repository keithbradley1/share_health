angular.module('Share_Health')
  .config($routeProvider => {
    $routeProvider
      .when('/user', {
        controller: 'UserCtrl',
        templateUrl: '/app/user_app/user/user.html'
      })
      .when('/user/:userId', {
        controller: 'UserDetailCtrl',
        templateUrl: '/app/user_app/user/userDetail.html'
      })
  })