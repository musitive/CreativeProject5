angular.module('submission', [])
.controller('MainCtrl', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.random_name = "";
        $scope.random_place = "";
        $scope.random_object = "";
        $scope.random_verb = "";
        $scope.random_img = "";
        $scope.headline = "";
        $scope.description = "";
        
        $scope.makePost = function() {
            $scope.headline = $scope.random_name + " " + $scope.random_verb.toUpperCase() + " " + $scope.random_object + " in " + $scope.random_place;
            $scope.img = $scope.random_img;
            $scope.description = "Sources reveal the SHOCKING information that " + $scope.headline;
        }

        $scope.submitPost = function() {
            if ($scope.headline == "" ||
                $scope.description == "") {
                    alert("Please finish your FAKE headline");
                } else {
                console.log("submit time boi");
                var json = {
                    title: $scope.headline,
                    image: $scope.random_img,
                    description: $scope.description
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
            var key = $scope.names[Math.floor(Math.random() * $scope.names.length)];
            $scope.random_name = $scope.things[key].name;
            $scope.random_place = $scope.places[Math.floor(Math.random() * $scope.places.length)];
            $scope.random_object = $scope.objects[Math.floor(Math.random() * $scope.objects.length)];
            $scope.random_verb = $scope.verbs[Math.floor(Math.random() * $scope.verbs.length)];
            $scope.random_img = $scope.things[key].images[Math.floor(Math.random() * $scope.things[key].images.length)];
            $scope.makePost();
        }

        $scope.things = {
            "donald": {
                name: "Donald Trump",
                images: [
                    "https://timedotcom.files.wordpress.com/2017/02/trump8.jpg?quality=85",
                    "http://cdn.cnn.com/cnnnext/dam/assets/170822235920-08-trump-phoenix-0822-large-169.jpg"
                ]
            },
            "kim": {
                name: "Kim Jong-un",
                images: [
                    "http://i.telegraph.co.uk/multimedia/archive/02701/kim_2701423b.jpg",
                    "https://cdn.images.dailystar.co.uk/dynamic/1/photos/901000/620x/North-Korea-nuclear-war-621566.jpg"
                ]
            }
        }
        $scope.names = ["donald", "kim"]
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
    }
])
