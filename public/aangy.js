angular.module('submission', [])
.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.person;
        $scope.place;
        $scope.object;
        $scope.verb;
        $scope.img;
        $scope.str;
        $scope.previewPost = function() {
            console.log("preview time boi");
            person = document.getElementById("person").value;
            place = document.getElementById("place").value;
            object = document.getElementById("object").value;
            verb = document.getElementById("verb").value;
            img = document.getElementById("img").value;

            $scope.str = person + " loves to " + verb + " " + object + " in " + place;
            console.log($scope.str);        
        }

        $scope.submitPost = function() {
            console.log("submit time boi");
        }

        $scope.randomize = function() {
            console.log("randomize");
        }
    }
])