angular.module('alurapic', [
  'minhasDiretivas',
  'ngAnimate',
  'ngRoute'
]).config(function ($routeProvider, $locationProvider) {

  // ativamos o módulo do HTML5 para que não apareça a # na nossa url
  $locationProvider.html5Mode(true)

  // utilizamos o routerProvider.when para passar o caminho do componente e qual as configurações que ele ira utilizar
  $routeProvider.when('/fotos', {
    templateUrl: 'partials/principal.html',
    controller: 'FotosController'
  })

  // utilizamos o routerProvider.when para passar o caminho do componente e qual as configurações que ele ira utilizar
  $routeProvider.when('/fotos/new', {
    templateUrl: 'partials/foto.html',
    controller: 'FotoController'
  })

  // utilizamos o routerProvider.when para passar o caminho do componente e qual as configurações que ele ira utilizar
  $routeProvider.when('/fotos/edit/:fotoId', {
    templateUrl: 'partials/foto.html',
    controller: 'FotoController'
  })

  // caso seja passada uma uma url que não exista, estamo redirecionando o usuario para a url /fotos
  $routeProvider.otherwise({ redirectTo: '/fotos' })
})
