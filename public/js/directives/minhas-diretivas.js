angular.module('minhasDiretivas', [])

  .directive('meuPainel', function () {
    let ddo = {}

    ddo.restrict = "AE"

    ddo.scope = {
      titulo: '@'
    }

    ddo.transclude = true

    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo
  })

  .directive('minhaFoto', function () {
    let ddo = {}

    ddo.restrict = "AE"

    ddo.scope = {
      titulo: '@',
      url: '@'
    }

    ddo.templateUrl = 'js/directives/minha-foto.html'

    return ddo
  })

  .directive('meuBotaoRemover', function () {
    let ddo = {}

    ddo.restrict = "E"

    ddo.scope = {
      acao: '&',
      nome: '@'
    }

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'

    return ddo
  })

  .directive('meuFocus', function () {
    let ddo = {}

    ddo.restrict = "A"

    ddo.scope = {
      focado: '='
    }

    ddo.link = function (scope, element) {
      scope.$on('fotoCadastrada', function () {
        element[0].focus()
      })
    }

    return ddo
  })