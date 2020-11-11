angular.module('alurapic').controller('FotosController', function ($scope, $http) {

  $scope.fotos = []
  $scope.filtro = ""
  $scope.mensagem = ''

  $http.get('v1/fotos').success(function (fotos) {
    $scope.fotos = fotos
  })
    .error(function (error) {
      console.log(error)
    })



  $scope.remover = function (foto) {
    console.log(foto)
    $http.delete(`v1/fotos/${foto._id}`)
      .success(function () {
        let indiceFoto = $scope.fotos.indexOf(foto)
        $scope.fotos.splice(indiceFoto, 1)
        $scope.mensagem = `Foto ${foto.titulo} foi removida com sucesso`
      })
      .error(function (erro) {
        console.log(erro)
        $scope.mensagem = `Não foi possivel remover a foto ${foto.titulo}`
      })
  }

  // let promise = $http.get('v1/fotos')
  // promise.then(function (retorno) {
  //   $scope.photos = retorno.data
  // }).catch(function (error) {
  //   console.log(error)
  // })
})