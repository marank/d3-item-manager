(function() {
    'use strict';

    angular.module('d3-item-manager').directive('newFeatures', newFeatures);

    function newFeatures() {
        return {
            restrict:     'E',
            templateUrl:  'directives/newFeatures/newFeatures.template.html',
            scope:        {},
            controllerAs: 'vm',

            controller
        };

        function controller($location, config, locales) {
            var vm = this; // jshint ignore:line

            vm.itemLanguageNotConfigured = itemLanguageNotConfigured;
            vm.showConfig = showConfig;
            vm.setDefaultItemLanguage = setDefaultItemLanguage;
            vm.t = locales.t;

            function itemLanguageNotConfigured() {
                return !config.isSet('locale');
            }

            function showConfig() {
                $location.path('/config');
            }

            function setDefaultItemLanguage() {
                config.setItem('locale', 'en_GB');
            }
        }
    }
})();