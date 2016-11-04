  //my API key 66bc55e03fcdf78423c542c226934503

var app = angular.module('weatherApp',['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('weatherAppController',function($scope){

  $scope.cityList=['Chennai'];
  $scope.selectedCity="";
  $scope.weatherData=[];


  $scope.weatherDataArray=[];


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



      //  console.log(data.list);

         for(i=data.list.length-1;i>=0;){

           var tmpArray=[];
            for(k=0;k<8;k++){

            //  console.log(i);
            var temp=data.list[i];
            tmpArray.push({          "Date":temp.dt_txt,
                                     "Humidity":temp.main.humidity,
                                     "Pressure":temp.main.pressure,
                                     "Temperature":temp.main.temp,
                                     "WindSpeed":temp.wind.speed,
                                     "WeatherDescription":temp.weather[0].description,
                                     "WeatherDescMain":temp.weather[0].main
                                   });
            i--;
            if(i==-1)
            break;

                              };//end of K for loop
            $scope.weatherData.push(tmpArray);


          };
          //console.log($scope.weatherData);
          $scope.weatherDataArray=$scope.weatherData[4];

        },//end of success

        error: function(xhr, status, err) {
         console.error(err.toString());
       }

     });//end of ajax




  };





  $scope.callTab = function(index){
    $scope.weatherDataArray=$scope.weatherData[index];
    //console.log($scope.weatherDataArray);
  };


});
