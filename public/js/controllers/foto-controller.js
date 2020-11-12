angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, cadastroDeFotos, $routeParams) {

  $scope.foto = {}
  $scope.mensagem = ''

  if ($routeParams.fotoId) {
    recursoFoto.get({ fotoId: $routeParams.fotoId }, function (foto) {

      $scope.foto = foto

    }, function (erro) {

      $scope.mensagem = 'Não foi possivel encontrar a foto.'
      console.log(erro)

    })
  }

  $scope.submeter = function () {

    if ($scope.formulario.$valid) {

      cadastroDeFotos.cadastrar($scope.foto)
        .then(function (dados) {
          $scope.mensagem = dados.mensagem

          if (dados.inclusao) {
            $scope.dados = {}
          }
        })
        .catch(function (dados) {
          $scope.mensagem = dados.mensagem
        })

      // if ($scope.foto._id) {

      //   recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto, function () {

      //     $scope.mensagem = 'Foto atualizada com sucesso.'

      //   }, function (erro) {

      //     $scope.mensagem = 'Não foi possivel atualizar a foto.'
      //     console.log(erro)

      //   })
      // } else {

      //   recursoFoto.save($scope.foto, function () {

      //     $scope.foto = {}
      //     $scope.mensagem = 'Foto cadastrada com sucesso.'

      //   }, function (erro) {

      //     $scope.mensagem = 'Não foi possivel cadastrar a foto.'
      //     console.log(erro)

      //   })
      // }


    }
  }
})