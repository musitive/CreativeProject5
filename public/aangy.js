angular.module('submission', [])
.controller('MainCtrl', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.random_name = "";
        $scope.random_place = "";
        $scope.random_object = "";
        $scope.random_verb = "";
        $scope.random_img = "http://ak9.picdn.net/shutterstock/videos/8920699/thumb/2.jpg";
        $scope.headline = "";
        $scope.description = "";
        
        $scope.makePost = function() {
            $scope.headline = $scope.random_name + " " + $scope.random_verb.toUpperCase() + " " + $scope.random_object + " in " + $scope.random_place;
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
        $scope.places = ["Afghanistan", "Albania", "Algeria", "Antarctica", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
                        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
                        "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
                        "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
                        "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
                        "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo",
                        "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus",
                        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
                        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
                        "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan",
                        "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany",
                        "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea",
                        "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "the Vatican",
                        "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran",
                        "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
                        "South Korea", "North Korea", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia",
                        "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya",
                        "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Madagascar",
                        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius",
                        "Mayotte", "Mexico", "Monaco", "Mongolia", "Montserrat",
                        "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
                        "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
                        "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
                        "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania",
                        "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
                        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore",
                        "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                        "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
                        "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
                        "Taiwan, Province of China", "Tajikistan", "Thailand", "Togo", "Tokelau", "Tonga",
                        "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
                        "United Arab Emirates", "United Kingdom", "United States"]
        $scope.objects = ["dogs", "cats", "flowers", "money", "lamp shades", "Donald Trump", "Melania Trump", "Barack Obama", "Taylor Swift",
                            "McDonalds", "burger", "civilians", "desserts", "Walmart", "Google", "Facebook", "Apple", "Microsoft", "the Pope",
                            "Kanye West", "Kevin Spacey", "Tom Cruise", "Star Wars", "Darth Vader", "private island", "car", "house", "White House",
                            "Empire State Building", "Statue of Liberty", "Doritos", "BYU students", "Bernie Sanders", "Hillary Clinton", "fake news"]
        $scope.verbs = ["pets", "plays with", "smells", "cleans", "launches", "deceives", "preserves", "kills", "kisses", "forces",
                        "passes", "sins against", "run", "stabs", "knives", "trumps", "devours", "captures", "accuses", "destroys",
                        "laughs at", "forbids", "contemplates", "eats", "offends", "triggers", "cancels", "distrupts", "enjoys",
                        "eliminates", "trashes", "insults", "pleases", "generates", "compliments", "battles", "dresses up as", "wears",
                        "buys", "spreads", "encourages", "pressures", "leads on", "dedicates", "fires"]
    }
])
