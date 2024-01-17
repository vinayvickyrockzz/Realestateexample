app.controller('MainController', function($scope) {
    // Sample data for featured properties (Replace this with actual data retrieval)
    $scope.featuredProperties = [
      {
        name: 'Property 1',
        address: '123 Main St',
        price: '$250,000'
        // Add more property details here
      },
      {
        name: 'Property 2',
        address: '456 Elm St',
        price: '$300,000'
        // Add more property details here
      },
      // Add more properties as needed
    ];
  });
