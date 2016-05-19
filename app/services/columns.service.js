(function() {
    'use strict';

    angular.module('d3-item-manager').factory('columns', columns);

    var keyAll = 'allColumns';

    // TODO: add cubed to array

    function columns(config, locales) {
        var _all = config.getItem(keyAll, [locales.t('general.stashed')]);

        return {
            remove,
            add,
            all,
            reallyAll
        };

        function reallyAll(){
            return _.flatten([locales.t('general.cubed'), all()]);
        }

        function all() {
            return _all;
        }

        function remove(gm) {
            _all = _all.filter(function(item) {return item !== gm;});
            save();
        }

        function add(gm) {
            if (_.contains(_all, gm)) {return;}
            _all.push(gm);
            save();
        }

        function save() {
            config.setItem(keyAll, _all);
        }
    }

})();