(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name ngModuleTemplate
    * @description
    * ngModuleTemplate
    *
    * Main module of the module's ngModuleTemplate application.
   */
  angular.module("ngModuleTemplate", []).directive('ngModuleTemplate', function() {
    return {
      restrict: "E",
      scope: true,
      link: function(scope, element, attributes) {
        console.log("calling prout");
        return scope.content = attributes.content || "ngModuleTemplate simple directive example";
      }
    };
  });

}).call(this);
