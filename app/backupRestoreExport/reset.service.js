(function() {
    'use strict';

    angular.module('d3-item-manager').factory('reset', reset);

    function reset(config, itemTracking) {
        return {
            resetAllData
        };

        function resetAllData() {
            config.setCompleteConfigReloadRequired(null);
            itemTracking.setCompleteTrackingReloadRequired(null);
            $location.path('/');
        }

    }
})();