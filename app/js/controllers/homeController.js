(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('homeCtrl', function($scope, $http, parallaxHelper, config, toaster) {
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

        // Enviar email
        vm.isLoading = false
        vm.sendMail = function(d) {
            vm.isLoading = true
            let objData = {
                nome: d.nome,
                email: d.email,
                telefone: d.telefone,
                mensagem: d.mensagem
            }
            $http.post(config.emailConst, objData)
            .then((response) => {
                if(response.data.status) {
                    toaster.success('Sucesso!', response.data.msg)
                    vm.dados = {}
                    vm.isLoading = false
                } else {
                    toaster.error('Erro', response.data.msg)
                    vm.isLoading = false
                }
            })
            .catch((error) => {
                toaster.error('Erro', error.data)
                vm.isLoading = false
            })
        }
    })
})()