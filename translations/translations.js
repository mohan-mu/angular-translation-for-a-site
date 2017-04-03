angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('kn', {"This is True":"ಇದು ನಿಜ","(specify)":"(ಸೂಚಿಸಿ)"});
    gettextCatalog.setStrings('es', {"This is True":"Esto es pura","(specify)":"(specyo)"});
/* jshint +W100 */
}]);