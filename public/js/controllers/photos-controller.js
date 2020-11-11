angular.module('alurapic').controller('PhotosController', function ($scope, $http) {

  $scope.photos = []
  $scope.filter = ""

  $http.get('v1/fotos').success(function (photos) {
    $scope.photos = photos
  })
    .error(function (error) {
      console.log(error)
    })

  // let promise = $http.get('v1/fotos')
  // promise.then(function (retorno) {
  //   $scope.photos = retorno.data
  // }).catch(function (error) {
  //   console.log(error)
  // })
})
