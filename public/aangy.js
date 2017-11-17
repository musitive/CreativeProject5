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
            },
            "taylor": {
                name: "Taylor Swift",
                images: [
                    "http://img.wennermedia.com/social/taylor-swift-swift-life-a61e99a0-bf48-4f4b-9598-fb0c529961bf.jpg",
                    "http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2017/11/15/896/504/694940094001_5647910849001_5647869795001-vs.jpg?ve=1&tl=1"
                    
                ]
            },
            "obama": {
                name: "Barack Obama",
                images: [
                    "http://cdn.cnn.com/cnnnext/dam/assets/161226182723-president-barack-obama-exlarge-169.jpg",
                    "https://static.politico.com/e7/2c/d24a941e479f99d58789db041da5/160904-barack-obama-ap-16248183644375.jpg"
                ]
            },
            "anderson": {
                name: "Anderson Cooper",
                images: [
                    "http://cdn.cnn.com/cnnnext/dam/assets/161130004253-exp-anderson-cooper-on-trumps-latest-tweet-storm-cnntv-00000023-large-169.jpg"
                ]
            },
            "fox": {
                name: "Fox Reporter",
                images: [
                    "http://thehill.com/images/stories/itk/shannonbream.jpg"
                ]
            },
            "tim": {
                name: "Tim Cook",
                images: [
                    "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg"
                ]
            },
            "sundar": {
                name: "Sundar Pichai",
                images: [
                    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/08/sundar-pichai-google.jpg"
                ]
            },
            "mark": {
                        name: "Mark Zuckerberg",
                        images: [
                            "http://www.siliconbeat.com/wp-content/uploads/2015/06/zuck31.jpg"
                        ]
                    },
            "kanye": {
                        name: "Kanye West",
                        images: [
                            "https://sslg.ulximg.com/image/405x405/artist/1392767353_217f16228baaa5dc18c82925ac76edf6.jpg/9e89e114db44f266e044addd06e88d69/1392767353_kanye_west_wall_40.jpg"
                        ]
                    },
        }
        $scope.names = ["donald", "kim", "taylor", "obama", "anderson", "fox", "tim", "sundar", "mark", "kanye"]
        $scope.places = ["Canada", "Mexico", "Italy", "France", "Greece"]
        $scope.objects = ["dogs", "cats", "flowers", "money", "lamp shades"]
        $scope.verbs = ["pets", "plays with", "smells", "cleans", "launches", "deceives", "preserves", "kills", "kisses", "forces",
                        "passes", "sins against", "run", "stabs", "knives", "trumps", "devours", "captures", "accuses", "destroys",
                        "laughs at", "forbids", "contemplates",]
        $scope.images = [
            "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
            "http://apopka-1x1yusplq.stackpathdns.com/wp-content/uploads/2017/10/persian-cats-and-kittens-1.jpg",
            "https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg",
            "http://www.meridianpeakhypnosis.com/wp-content/uploads/2014/02/money-addiction.jpg",
            "https://target.scene7.com/is/image/Target/15394670_Alt01?wid=520&hei=520&fmt=pjpeg"
        ]
    }
])
