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
    //         // This is my FB app id for plunker demo app
    //         appId: '1222472067795207',
    //
    //         // Module default is `v2.6`.
    //         // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
    //         // https://developers.facebook.com/docs/javascript/reference/FB.init
    //         version: 'v2.3'
    //     });

    //     // Default init function
    //     var _defaultInitFunction = ['$window', 'ezfbInitParams', function($window, ezfbInitParams) {
    //         // Initialize the FB JS SDK
    //         $window.FB.init(ezfbInitParams);
    //     }];
    //
    //     var myInitFunction = function($window, $rootScope, ezfbInitParams) {
    //         $window.FB.init({
    //             appId: '1222472067795207'
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
    //         appId: '386469651480295'
    //     });
    // });
