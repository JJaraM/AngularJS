app.service('LoginService', function ($http) {
  return {
    signIn: function(email, password) {
      return $http.get('http://localhost:8080/application/api/user/signIn?email='+email+'&password='+password);
    }
  };
})
