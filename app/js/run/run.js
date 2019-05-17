(function() {
    'use strict'

    const app = angular.module('myApp')

    app.run(function($rootScope) {
        new WOW().init()
    })
})()