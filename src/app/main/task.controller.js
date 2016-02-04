(function() {
  'use strict';

  angular
    .module('yeomanGetingStart')
    .controller('TaskController', ['$scope', TaskController]);

  /** @ngInject */
  function TaskController($scope) {
    var tk = this;

    $scope.cats = [
      {
        name: "Pigeon",
        picture: "/assets/images/pigeon.jpg"
      },
      {
        name: "Doughnut",
          picture: "/assets/images/Doughnut.jpg"
      },
      {
        name: "Serious sam",
        picture: "/assets/images/sam.jpg"
      }
    ];
  }
})();
