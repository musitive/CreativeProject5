angular.module('posts', [])
.controller('MainCtrl', [
  '$scope', '$http',
  function($scope, $http){
    $scope.posts = [];
    $scope.getAll = function() {
        return $http.get("/headlines").success(function(data){
            console.log(data); 
            angular.copy(data, $scope.posts);
            });
        };
/*
    $scope.incrementUpvotes = function(comment) {
      $scope.upvote(comment);
    };
    $scope.addComment = function() {
      $scope.comments.push({title:$scope.formContent,upvotes:0});
      $scope.formContent='';
    };
    $scope.upvote = function(comment) {
      return $http.put('/comments/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes += 1;
        });
    };*/

  }
]);