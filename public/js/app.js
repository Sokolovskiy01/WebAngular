//client-side application using angular
//this .js file will see every user which opens this web page
var app = angular.module('webangular',[])

app.controller('Ctrl',['$http',function($http){
    console.log('Angular controller started')

    var ctrl = this;

    ctrl.message = 'Angular works'
}])