var booksCart = angular.module('booksCart', ['ngRoute']);

booksCart.config(function ($httpProvider) {
    $httpProvider.interceptors.push('tokenInterceptor');
});

booksCart.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute){
        if(nextRoute.requiresLogin && !authService.getToken()){
            event.preventDefault();
            $location.path('/login');
        }
    });
});





