angular.module('app', ['ngRoute', 'ezfb'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('todoService', todoService)
    .controller('mainController', mainController)
    .controller('navbarController', navbarController)
    .controller('loginController', loginController)
    .controller('adminController', adminController)
    .controller('editActivity', editActivity)
    .directive('navbarFix', navbarFix)
    .config(routes)
    .run(loginStatus);
    // .config(function(ezfbProvider) {
    //     ezfbProvider.setLocale('fr_FR');
    //     ezfbProvider.setInitParams({
    //         appId: '1222472067795207',
    //         version: 'v2.3'
    //     });
    // })
    // .run(function(ezfb) {
    //     ezfb.init({
    //         appId: '1222472067795207'
    //     });
    // });
