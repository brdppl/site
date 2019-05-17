(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('homeCtrl', function($scope, $http, parallaxHelper, config) {
        const vm = this

        vm.background = parallaxHelper.createAnimator(-0.3)

        vm.jobs = []
        function listJobs() {
            $http.get(config.jobsConst)
            .then(function(response) {
                vm.jobs = response.data
            })
        }
        listJobs()

        vm.contacts = []
        function listContacts() {
            $http.get(config.contactsConst)
            .then(function(response) {
                vm.contacts = response.data
            })
        }
        listContacts()

        // Scroll down
        vm.scrollDown = function(id) {
            $('html, body').animate({scrollTop: $(`.${id}`).offset().top }, 1250, 'easeInOutExpo')
        }
    })
})()