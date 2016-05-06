app.controller('LoginController', function($scope) {
  $scope.user = {email: '', password: ''};

  $scope.signIn = function() {
    console.log('Email ' + $scope.user.email);
    console.log('Password ' + $scope.user.password);
  }

});
