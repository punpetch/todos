angular.module('todosApp' , [])
.service('todosService',function(){
  var self = this

  self.todos =[
    {titles: "Home Work 1",done: false},
    {titles: "Home Work 2",done: true}
  ]

  self.list = function () {
    return self.todos
  }

  self.add = function (todo) {
    self.todos.push(todo)
  }
})
.controller('ListTodosController', function ($scope, todosService) {
  $scope.todos = todosService.list()
})
.controller('AddTodosController', function ($scope, todosService) {
  $scope.save = function () {
    var todo = {
      titles: $scope.titles,
      done: $scope.done
    }

    todosService.add(todo)
    resetForm()
  };

  function resetForm(){
    $scope.titles = ''
    $scope.done = ''
  }
})
