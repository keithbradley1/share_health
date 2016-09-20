angular.module("Share_Health")
  .controller('UserCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "User";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
          $http.get(`${root.user}`)
            .then(res => {
              $scope.user = res.data
            });
          $timeout();
        },
        err => console.log('error', err)
        // ).then(
        //   $timeout //forces scope apply to DOM - reapply everything
        );

      $scope.addUser = (newUser) => {
        console.log(newUser)
          $http.post(`http://localhost:8000/user/`, { name: newUser})
            .then(res => {
              console.log("res user: ", res );
              $scope.user.push(res.data)
              $scope.newUser = ""
              $timeout()
            });
      };

    }]);





