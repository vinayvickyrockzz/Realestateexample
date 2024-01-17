angular.module('hotelDetails')
    .component('hotelDetails', {
        templateUrl: 'hotelDetails/hotelDetails.template.html',
        controller: ['hotelService', '$routeParams', function(hotelService, $routeParams) {
            console.log("Hotel details are working..")
            this.hotelId = $routeParams.hotelId;
            this.hotel = hotelService.getHotelById(this.hotelId);
        }]
    });