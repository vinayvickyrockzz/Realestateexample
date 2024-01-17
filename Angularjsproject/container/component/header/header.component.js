// Assuming you have already defined the 'realEstateApp' module in your application

app.controller('HeaderController', function($scope, $location) {
    // Initialize any scope variables or logic for the header
    $scope.navLinks = [
        { label: 'Home', path: '/home' },
        { label: 'About Us', path: '/about' },
        { label: 'login', path: '/login' },
        // Add more navigation links as needed
      ];
    // Function to set the active class based on the current route
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });