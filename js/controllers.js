app.controller('LoginController', function($scope, LoginService) {

  $scope.user = {email: '', password: ''};

  $scope.init = function() {
    $scope.error = false;
    $scope.errorMessage = '';
  }

  $scope.signIn = function() {
    $scope.init();
    var error = $scope.validateField($scope.user.email, $scope.user.password);
    if (!error.status) {
      LoginService.signIn($scope.user.email, $scope.user.password);
      $scope.init();
    } else {
      $scope.error = error.status;
      $scope.errorMessage = error.message;
    }
  }

  $scope.validateField = function(email, password) {
    var error = {status: false, message: ''};
    if (email.trim().length == 0) {
      error.message = 'The email is required';
      error.status = true;
    } else if (password.trim().length == 0) {
      error.message = 'The password is required';
      error.status = true;
    }
    return error;
  }

  $scope.init();

});
