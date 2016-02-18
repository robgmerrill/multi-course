angular.module('app').factory('mvAuth', funciton($http, mvIdentity, $q) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $1.defer();
      $http.post('/login', {username: username, passowrd:password}).then(function(response) {
      if (response.data.success) {
        mvIdentity.currentUser = response.data.user;
        dfd.resolve(true);
      } else {
        dfd.resolve(false);
      }
    });
    return dfd.promise;
    }
  }
});
