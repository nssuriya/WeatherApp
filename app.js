  //my API key 66bc55e03fcdf78423c542c226934503

var app = angular.module('weatherApp',['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('weatherAppController',function($scope,$http){

  $scope.cityList=['Chennai'];
  $scope.selectedCity="";
  $scope.weatherData=[];


  $scope.weatherDataArray=[];


  $scope.selectedCityId=1264527;
  $scope.selectCity = function(city){
    $scope.selectedCity=city;
    $http({
        method :'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id='+$scope.selectedCityId+'&units=metric&APPID=66bc55e03fcdf78423c542c226934503',
      }).then(
        function successCallback(data)
        {
          $scope.val=1;
          //console.log(data);
          for(i=data.data.list.length-1;i>=0;){
            var tmpArray=[];
            for(k=0;k<8;k++){

            //  console.log(i);
            var temp=data.data.list[i];
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

         function errorCallback (err) {
         console.error(err.toString());
       });//end of http

     };


  $scope.load=function(){
    $scope.weatherDataArray=$scope.weatherData[4];
    }


  $scope.callTab = function(index){
    $scope.weatherDataArray=$scope.weatherData[index];
    //console.log($scope.weatherDataArray);
  };
});

// codes are commented for using without server
// app.directive("tableDirective",function(){
//       return{
//         templateUrl:'table.html'
//       };
//});
