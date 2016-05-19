(function() {
    'use strict';

    angular.module('d3-item-manager').factory('locales', locales);

    var localeKey = 'locale';
    var localizedStrings = [];

    function locales(config, $http) {
        var locale = currentLocale().id;
        $http.get(`lang/${locale}.json`, {cache: true}).
            then(function(result) {
                localizedStrings = result.data;
            });

        return {
            all,
            currentLocale,
            setLocaleById,
            t,
            trans: t
        };

        function currentLocale(){
            var id = config.getItem(localeKey, 'en_GB');
            return _.find(allLocales, function(l) {return l.id === id;});
        }

        function all(){
            return allLocales;
        }

        function setLocaleById(id){
            config.setItem(localeKey, id);
            $http.get(`lang/${id}.json`).
                then(function(result) {
                    localizedStrings = result.data;
                });
        }

        function t(key){
            return localizedStrings[key];
        }
    }

    var allLocales = [
        {
            id:     "en_GB",
            name:   "English",
            short:  'en',
            region: 'eu'
        },
        {
            id:     "de_DE",
            name:   "German",
            short:  'de',
            region: 'eu'
        },
        {
            id:     "es_ES",
            name:   "Spanish",
            short:  'es',
            region: 'eu'
        },
        {
            id:     "fr_FR",
            name:   "French",
            short:  'fr',
            region: 'eu'
        },
        {
            id:     "it_IT",
            name:   "Italian",
            short:  'it',
            region: 'eu'
        },
        {
            id:     "pl_PL",
            name:   "Polish",
            short:  'pl',
            region: 'eu'
        },
        {
            id:     "pt_PT",
            name:   "Portuguese",
            short:  'pt',
            region: 'eu'
        },
        {
            id:     "ru_RU",
            name:   "Russian",
            short:  'ru',
            region: 'eu'
        },
        {
            id:     "kr_KR",
            name:   "Korean (South Korea)",
            short:  'kr',
            region: 'kr'
        },
        {
            id:     "sh_TW",
            name:   "Traditional Chinese",
            short:  'tw',
            region: 'tw'
        },
        {
            id:     "zh_CN",
            name:   "Simplified Chinese",
            short:  'cn',
            region: 'cn'
        }
    ];
})();