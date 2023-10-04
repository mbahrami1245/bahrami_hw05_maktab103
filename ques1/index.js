let user = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log(this.name + ' Hello');
    }
  };
  user.sayHello(); // 
  