angular.module('minhasDiretivas', []).directive('meuPainel', function () {
  let ddo = {}

  ddo.restrict = "AE"

  ddo.scope = {
    title: '@'
  }

  ddo.transclude = true

  ddo.templateUrl = 'js/directives/meu-painel.html'


  return ddo
})