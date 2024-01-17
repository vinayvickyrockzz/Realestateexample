angular.module('RealEstateApp.login', [])
  .controller('LoginController', function ($scope, $location) {
    // Mock user credentials
    var validUsername = 'user123';
    var validPassword = 'pass123';

    $scope.login = function () {
      // Check if the entered credentials match the valid ones
      if ($scope.username === validUsername && $scope.password === validPassword) {
        // Successful login, redirect to home page
        $location.path('/');
      } else {
        // Failed login, show an error message or perform other actions
        alert('Invalid username or password. Please try again.');
      }
    };
  });
