function StaffController() {
  var vm = this;

  vm.name = 'Oz';
  vm.email = 'oz@oz.com';
  vm.phone = '0123456789';
}

angular
  .module('app')
  .controller('StaffController', StaffController);