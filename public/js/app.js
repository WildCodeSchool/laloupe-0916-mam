angular.module('app', ['ngRoute', 'ngSanitize'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('todoService', todoService)
    .service('activiteService', activiteService)
    .service('infoService', infoService)
    .service('partenaireService', partenaireService)
    .controller('mainController', mainController)
    .controller('navbarController', navbarController)
    .controller('loginController', loginController)
    .controller('adminController', adminController)
    .controller('editActivity', editActivity)
    .controller('editInfo', editInfo)
    .controller('createPartenaire', createPartenaire)
    .controller('deletePartenaire', deletePartenaire)
    .directive('navbarFix', navbarFix)
    .directive('file', findImage)
    .config(routes)
    .run(loginStatus);
    // .config(function(ezfbProvider) {
    //     ezfbProvider.setLocale('fr_FR');
    //     ezfbProvider.setInitParams({
    //         // This is my FB app id for plunker demo app
    //         appId: '207183279704907',
    //
    //         // Module default is `v2.6`.
    //         // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
    //         // https://developers.facebook.com/docs/javascript/reference/FB.init
    //         version: 'v2.3'
    //       });
    //
    //     // Default init function
    //     var _defaultInitFunction = ['$window', 'ezfbInitParams', function($window, ezfbInitParams) {
    //         // Initialize the FB JS SDK
    //         $window.FB.init(ezfbInitParams);
    //     }];
    //
    //     var myInitFunction = function($window, $rootScope, ezfbInitParams) {
    //         $window.FB.init({
    //             appId: '207183279704907'
    //         });
    //         // or
    //         // $window.FB.init(ezfbInitParams);
    //
    //         $rootScope.$broadcast('FB.init');
    //     };
    //
    //     ezfbProvider.setInitFunction(myInitFunction);
    //
    //     // Default load SDK function
    //     var _defaultLoadSDKFunction = [
    //         '$window', '$document', 'ezfbAsyncInit', 'ezfbLocale',
    //         function($window, $document, ezfbAsyncInit, ezfbLocale) {
    //             // Load the SDK's source Asynchronously
    //             (function(d) {
    //                 var js, id = 'facebook-jssdk',
    //                     ref = d.getElementsByTagName('script')[0];
    //                 if (d.getElementById(id)) {
    //                     return;
    //                 }
    //                 js = d.createElement('script');
    //                 js.id = id;
    //                 js.async = true;
    //                 js.src = "//connect.facebook.net/" + ezfbLocale + "/sdk.js";
    //                 // js.src = "//connect.facebook.net/" + ezfbLocale + "/sdk/debug.js";  // debug
    //                 ref.parentNode.insertBefore(js, ref);
    //             }($document[0]));
    //
    //             $window.fbAsyncInit = ezfbAsyncInit;
    //         }
    //     ];
    //
    //     // Feasible config if the FB JS SDK script is already loaded
    //     ezfbProvider.setLoadSDKFunction(function(ezfbAsyncInit) {
    //         ezfbAsyncInit();
    //     });
    // })
    // .run(function(ezfb) {
    //     ezfb.init({
    //         // This is my FB app id for plunker demo app
    //         appId: '207183279704907'
    //     });
    // });
