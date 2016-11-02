


  //my API key 66bc55e03fcdf78423c542c226934503
var app = angular.module('weatherApp',[]);
app.controller('weatherAppController',function($scope){

  $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=1264527&APPID=66bc55e03fcdf78423c542c226934503',
      dataType: 'json',
      type: 'GET',
      success: function(data)
      {
       console.log(data);
       
      }.bind(this),
      error: function(xhr, status, err) {
       console.error(err.toString());
      }.bind(this)
    });

});
