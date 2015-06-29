angular.module('myApp',[])
  .controller('mainCtrl', addUsers);


  function addUsers() {
      var mainList = this;
      mainList.title = "AngularJS is GREAT!";
      mainList.users = [];
  }

  // method to add person to the users
  addUsers.prototype.addUser = function() {
    this.users.push({name: this.name, age: this.age});
    this.name = '';
    this.age = '';
  }
