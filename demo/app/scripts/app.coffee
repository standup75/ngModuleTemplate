'use strict'

###*
 # @ngdoc overview
 # @name demo
 # @description
 # demo
 #
 # Main module of the module's demo application.
###
app = angular.module "demo", ["ngRoute", "ngModuleTemplate"]

app.config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "views/main.html"
    controller: "MainCtrl"
  ).otherwise redirectTo: "/"
