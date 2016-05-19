(function() {
    'use strict';

    angular.module('d3-item-manager').controller('ConfigController', ConfigController);

    function ConfigController($location,
                              gameModes,
                              columns,
                              seasons,
                              itemCategory,
                              locales,
                              backup,
                              restore,
                              reset,
                              exportService) {
        var vm = this;
        vm.gameModes = gameModes;
        vm.addNewGameMode = addNewGameMode;
        vm.columns = columns;
        vm.addNewColumn = addNewColumn;
        vm.seasons = seasons;
        vm.addNewSeason = addNewSeason;
        vm.locales = locales;
        vm.dismiss = dismiss;
        vm.showCategory = showCategory;
        vm.backupData = backup.data;
        vm.triggerRestore = restore.trigger;
        vm.exportData = exportService.data;
        vm.resetAllData = reset.resetAllData;
        vm.t = locales.t;

        function addNewGameMode() {
            gameModes.add(vm.newGameMode);
            vm.newGameMode = '';
        }

        function addNewColumn() {
            columns.add(vm.newColumn);
            vm.newColumn = '';
        }

        function addNewSeason() {
            seasons.add(vm.newSeason);
            vm.newSeason = '';
        }

        function dismiss() {
            $location.path('/');
        }

        function showCategory(id) {
            itemCategory.set(id);
            $location.path('/items');
        }
    }
})();