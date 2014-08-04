'use strict'

###*
 # @ngdoc overview
 # @name ngModuleTemplate
 # @description
 # ngModuleTemplate
 #
 # Main module of the module's ngModuleTemplate application.
###
angular.module("ngModuleTemplate", []).directive 'ngModuleTemplate', ->
	restrict: "E"
	scope: true
	link: (scope, element, attributes) ->
		scope.content = attributes.content || "ngModuleTemplate simple directive example"