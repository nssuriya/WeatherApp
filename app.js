  //my API key 66bc55e03fcdf78423c542c226934503

var app = angular.module('weatherApp',['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('weatherAppController',function($scope){

  $scope.cityList=['Chennai'];
  $scope.selectedCity="";
  $scope.weatherData=[];
  // $scope.humidity="";
  // $scope.temperature="";
  // $scope.windspeed="";
  // $scope.weatherMain="";
  // $scope.weatherData={};




  $scope.selectedCityId=1264527;
  $scope.selectCity = function(city){
    $scope.selectedCity=city;
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast?id='+$scope.selectedCityId+'&units=metric&APPID=66bc55e03fcdf78423c542c226934503',

        dataType: 'json',
        type: 'GET',
        success: function(data)
        {
        // console.log(data);

        //for getting only the dates as array
        for(i=0;i<data.list.length;i++){
          var temp=data.list[i];
          var temp2=temp.dt_txt.split(" ");
          var date=temp2[0];
          $scope.weatherData[date]=[];
        }
        //console.log($scope.weatherData);
         for(i=0;i<data.list.length;i++){
           var temp=data.list[i];
           var temp2=temp.dt_txt.split(" ");
           var date=temp2[0];

            $scope.weatherData[date].push({"Date":temp.dt_txt,
                                     "Humidity":temp.main.humidity,
                                     "Pressure":temp.main.pressure,
                                     "Temperature":temp.main.temp,
                                     "Rain":temp.rain["3h"],
                                     "WindSpeed":temp.wind.speed,
                                     "WeatherDescription":temp.weather[0].description,
                                     "WeatherDescMain":temp.weather[0].main
                                   });


          };
          //console.log($scope.weatherData);
          for(eachday in $scope.weatherData){
            console.log(eachday);
          }

        },//end of success

        error: function(xhr, status, err) {
         console.error(err.toString());
       }

     });//end of ajax




  };

  $scope.weatherDataArray=[];



  $scope.callTab = function(index){
    //console.log($scope.weatherData);

  };


});
