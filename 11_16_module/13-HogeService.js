angular
.module('myModule')
.service('hogeService', function() {
    this.method = function() {
        return 'hoge service';
    };
});
