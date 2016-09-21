angular
.module('myModule', [])
.run(function($rootScope, hogeService, fugaService) {
    $rootScope.hoge = hogeService.method();
    $rootScope.fuga = fugaService.method();
});
