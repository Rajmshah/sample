var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home"
  },
  {
    name: "Product",
    classis: "active",
    link: "#/home",
    subnav: [{
      name: "Product1",
      classis: "active",
      link: "#/home"
    },
    {
      name: "Product2",
      classis: "active",
      link: "#/home"
    },{
      name: "Product3",
      classis: "active",
      link: "#/home"
    }]
  },
  {
    name: "About",
    classis: "active",
    link: "#/home"
  },
  {
    name: "Contact",
    classis: "active",
    link: "#/home"
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  }
});
