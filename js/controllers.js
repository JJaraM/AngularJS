app.controller('LoginController', function($scope, LoginService) {

  $scope.init = function() {
    $scope.user = {email: '', password: ''};
    $scope.error = false;
    $scope.errorMessage = '';
  }

  $scope.signIn = function() {
    $scope.init();
    if ($scope.user.email.trim().length == 0) {
      $scope.errorMessage = 'The email is required';
      $scope.error = true;
    } else if ($scope.user.password.trim().length == 0) {
      $scope.errorMessage = 'The password is required';
      $scope.error = true;
    }
    if ($scope.error) {
      //LoginService.signIn($scope.user.email, $scope.user.password);
    }
  }

  $scope.init();

});
