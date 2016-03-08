function ContactController() {
  var vm = this;
  
  vm.name = "Dee";
  vm.email = "dee@dee.com",
  vm.phone = '01234567890';

  vm.changeName = function () {
    vm.name = 'Deniz'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);