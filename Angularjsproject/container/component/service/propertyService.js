// app/services/propertyService.js

angular.module('realEstateApp')
  .service('propertyService', function () {
    var properties = [
      { id: 1, address: '123 Main St', type: 'House', price: 300000 },
      { id: 2, address: '456 Oak Ave', type: 'Apartment', price: 150000 },
     
    ];

    this.getAllProperties = function () {
      return properties;
    };

    this.getPropertyById = function (id) {
      return properties.find(property => property.id === id);
    };
  });
