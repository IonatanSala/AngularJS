angular.module('myApp',[])
  .controller('mainCtrl', addUsers);


  function addUsers() {
      var mainList = this;
      mainList.title = "AngularJS is GREAT!";
      mainList.users = [
        {
          name: "Jonatan",
          age: 19
        },
        {
          name: "Solomon",
          age: 17
        },
        {
          name: "Daniel",
          age: 20
        }
      ];
  }

  // method to add person to the users
  addUsers.prototype.addUser = function() {
    this.users.push({name: this.name, age: this.age});
    this.name = '';
    this.age = '';
  }
