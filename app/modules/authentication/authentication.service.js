(function () {
    'use strict';

    angular
        .module('AuthenticationServices', [])
        .factory('AuthenticationService', AuthenticationService)

    AuthenticationService.$inject = ['$http', '$firebaseAuth'];
    function AuthenticationService($http, $firebaseAuth) {
        var firebaseAuth = $firebaseAuth()
        var service = {
            login: login,
            logout: logout,
            isLogged: isLogged,
            firebaseAuth: firebaseAuth
        }
        return service

        function login(user) {
            return firebaseAuth.$signInWithEmailAndPassword(user.email, user.password);
        }

        function logout() {
             firebaseAuth.$signOut();
        }

        function isLogged() {
            return firebaseAuth.$getAuth();
        }

    }
})()