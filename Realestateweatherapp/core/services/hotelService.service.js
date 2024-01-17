var hotelService= angular.module('hotelService',[]);
hotelService.service('hotelService',[function(){
        var hotels=[
            {
                id: 1,
                name: "SunShine Villa property",
                address: "Kerala,India",
                imagePath: 'Images/villaImage1.jpg',
                price: '4000000',
                details: "FIRST VILLA"

            
            },
            {
                id: 2,
                name: " Beach Villa property",
                address: "Chennai, India",
                imagePath: 'Images/villaImage2.jpg',
                price: '5000000',
                details: "SECOND VILLA"

            },
            {
                id: 3,
                name: "Moutain area villa property",
                address: "Uttarkhand, India",
                imagePath: 'Images/villaImage3.jpg',
                price: '11000000',
                details: "THIRD VILLA"

            },
            {
                id: 4,
                name: "Hill area Villa property",
                address: "Himachal Pradesh, India",
                imagePath: 'Images/villaImage4.jpg',
                price: '10000000',
                details: "FOURTH VILLA"

            },
            {
                id: 5,
                name: "Forest area Villa property",
                address: "Madhya pradesh,India",
                imagePath: 'Images/villaImage5.jpg',
                price: '7000000',
                details: "FIFTH VILLA"

            },
            {
                id: 6,
                name: "Deccan Plateau Villa property",
                address: " Telangana,India",
                imagePath: 'Images/villaImage6.jpg',
                price: '8000000',
                details: "SIXTH VILLA"

            }
        ];
        this.getHotels= function(){
            return hotels;
        }
        this.getHotelById= function(id){
            return hotels.find(function(hotel){
                return hotel.id== id;
            });
        };
    }]);