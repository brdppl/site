(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('modalSkillsCtrl', function($uibModalInstance, $http) {
        const vm = this

        vm.oneAtATime = true
        vm.status = {
            isOpen: false
        }

        vm.close = function () {
            $uibModalInstance.dismiss('cancel')
        }
    })
})()