angular.module('submission', [])
.controller('MainCtrl', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.person = "";
        $scope.place = "";
        $scope.object = "";
        $scope.verb = "";
        $scope.img = "";
        $scope.headline = "";
        $scope.description = "";
        $scope.names = ["James", "John", "Robert", "Michael"]
        $scope.places = ["Canada", "Mexico", "Italy", "France", "Greece"]
        $scope.objects = ["dogs", "cats", "flowers", "money", "lamp shades"]
        $scope.verbs = ["pets", "plays with", "smells", "cleans", "launches"]
        $scope.images = [
            "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
            "http://apopka-1x1yusplq.stackpathdns.com/wp-content/uploads/2017/10/persian-cats-and-kittens-1.jpg",
            "https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg",
            "http://www.meridianpeakhypnosis.com/wp-content/uploads/2014/02/money-addiction.jpg",
            "https://target.scene7.com/is/image/Target/15394670_Alt01?wid=520&hei=520&fmt=pjpeg"
        ]

        $scope.makePost = function() {
            $scope.person = document.getElementById("person").value;
            $scope.place = document.getElementById("place").value;
            $scope.object = document.getElementById("object").value;
            $scope.verb = document.getElementById("verb").value;
            $scope.img = document.getElementById("img").value;

            $scope.headline = $scope.person + " loves to " + $scope.verb + " " + $scope.object + " in " + $scope.place;
            $scope.description = "Sources reveal the SHOCKING information that " + $scope.headline;
        }

        $scope.previewPost = function() {
            console.log("preview time boi");
            $scope.makePost();
            console.log($scope.headline);        
        }

        $scope.submitPost = function() {
            $scope.makePost();
            if ($scope.person == "" ||
                $scope.object == "" ||
                $scope.verb == "" ||
                $scope.img == "" ||
                $scope.place == "") {
                alert("Please finish your FAKE headline");
            } else {
                console.log("submit time boi");
                console.log($scope.headline);
                var json = {
                    title: $scope.headline,
                    image: $scope.img,
                    description: $scope.description,
                }
                return $http.post('/headlines', json).success(function(data){
                    console.log("woah boi");
                    $scope.comments.push(data);
                });
            }
        }

        $scope.randomize = function() {
            console.log("randomize");
            var rand = Math.floor(Math.random() * $scope.names.length);
            $scope.random_name = $scope.names[Math.floor(Math.random() * $scope.names.length)];
            $scope.random_place = $scope.places[Math.floor(Math.random() * $scope.places.length)];
            $scope.random_object = $scope.objects[rand];
            $scope.random_verb = $scope.verbs[Math.floor(Math.random() * $scope.verbs.length)];
            $scope.random_img = $scope.images[rand];
        }
    }
])
