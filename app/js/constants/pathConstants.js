(function() {
    'use strict'

    const app = angular.module('myApp')

    const base = 'json/'

    app.constant("config", {
        jobsConst: base+'jobs.json',
        contactsConst: base+'contacts.json',
    })
})()