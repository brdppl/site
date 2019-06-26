(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('headerCtrl', function($scope, $uibModal) {
        const vm = this

        vm.offset = $(document).scrollTop()
        vm.halfOffset = ($('#about').offset().top - $('#home').offset().top)/2

        vm.status = {
            isCollapsed: true
        }

        vm.openHeader = function() {
            if(vm.status.isCollapsed) {
                vm.status.isCollapsed = false
            } else {
                vm.status.isCollapsed = true
            }
        }

        // Go to section
        vm.goToSection = function(id) {
            $('html, body').animate({scrollTop: $(id).offset().top }, 1250, 'easeInOutExpo');
            vm.status.isCollapsed = true
        }

        // Show/hide bubbles
        $(document).on("scroll", function(){
            if($(document).scrollTop() >= ($('#about').offset().top - $('#home').offset().top)/2){
                $('.header').addClass('show')
            } else {
                $('.header').removeClass('show')
            }
        })
        
        // Modal skills
        vm.modalSkills = function(parentSelector) {
            var parentElem = parentSelector ? angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/modals/skills.html',
                controller: 'modalSkillsCtrl',
                controllerAs: 'vm',
                windowClass: 'modal-skills',
                appendTo: parentElem
            })
        }

        // Progress bar
        window.onscroll = function() {progress()};
        function progress() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        }
    })
})()