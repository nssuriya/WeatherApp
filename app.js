  //my API key 66bc55e03fcdf78423c542c226934503

var app = angular.module('weatherApp',[]);
app.controller('weatherAppController',function($scope){

  $scope.cityList=['Chennai','Bangalore','Calcutta','Delhi'];
  $scope.selectedCity="";
  $scope.humidity="";
  $scope.temperature="";
  $scope.windspeed="";
  $scope.weatherMain="";
  $scope.weatherData={};

  $scope.selectCity = function(city){
    $scope.selectedCity=city;
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q={'+$scope.selectedCity+'}&units=metric&APPID=66bc55e03fcdf78423c542c226934503',

        dataType: 'json',
        type: 'GET',
        success: function(data)
        {
         console.log(data);
         console.log(data.main);
         $scope.weatherData=data;
         $scope.humidity=data.main.humidity;
         $scope.temperature=data.main.temp;
         $scope.windspeed=data.wind.speed;
         $scope.weatherMain=data.weather[0].main;
         console.log($scope.humidity);


        },
        error: function(xhr, status, err) {
         console.error(err.toString());
       }

      });




  };



});
