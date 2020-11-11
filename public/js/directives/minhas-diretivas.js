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