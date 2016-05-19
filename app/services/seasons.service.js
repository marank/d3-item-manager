(function() {
    'use strict';

    angular.module('d3-item-manager').factory('seasons', seasons);

    var keyAll = 'allSeasons';
    var keyCurrent = 'currentSeason';

    // TODO: add non-season to array

    function seasons(config) {
        var _all = config.getItem(keyAll, ['Season 4', 'Season 5']);
        var _current = config.getItem(keyCurrent, "Non Season");

        return {
            current,
            setCurrent,
            remove,
            add,
            all,
            reallyAll
        };

        function reallyAll(){
            return _.flatten(['Non Season', all()]);
        }

        function current() {
            return _current;
        }

        function all() {
            return _all;
        }

        function setCurrent(c) {
            _current = c;
            config.setItem(keyCurrent, c);
        }

        function setDefault() {
            if (!_.find(_all, current)) {
                setCurrent(_all[0]);
            }
        }

        function remove(gm) {
            _all = _all.filter(function(item) {return item !== gm;});
            setDefault();
            save();
        }

        function add(gm) {
            if (_.contains(_all, gm)) {return;}
            _all.push(gm);
            _all.sort();
            save();
        }

        function save() {
            config.setItem(keyAll, _all);
        }
    }

})();