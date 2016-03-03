var myModule = angular.module('local_storage_app', []);

myModule.controller("LocalStorageController", ['$scope,'LocalStorageService',
                function($scope, LocalStorageService){
                    
                    var qac = this;
                    
                    
      qac.students=
      [
         {
          name:"Jeffry Smith",
          correct:0,
          wrong:0
       },
       {
          name:"Brandon Luck",
          correct:0,
          wrong:0
       },
       {
          name:"Mary Hunter",
          correct:0,
          wrong:0
       },
       {
          name:"Sarmi Thapa",
          correct:0,
          wrong:0
       },
       {
          name:"Jon Ford",
          correct:0,
          wrong:0
       },
       {
          name:"Tylor Lamb",
          correct:0,
          wrong:0
       },
       {
          name:"Benjamin Hair",
          correct:0,
          wrong:0
       },
       {
          name:"Damian Mcdaniel",
          correct:0,
          wrong:0
       },
       {
          name:"James Bond",
          correct:0,
          wrong:0
       },
       {
          name:"Kashmir Reddy",
          correct:0,
          wrong:0
       },
       {
          name:"Asha Nurani",
          correct:0,
          wrong:0
       },
       {
          name:"Saru Aryal",
          correct:0,
          wrong:0
       },
       {
          name:"Natasha Pahari",
          correct:0,
          wrong:0
       },
       {
          name:"Bindu Sapkota",
          correct:0,
          wrong:0
       },
       {
          name:"Kishor Bhujel",
          correct:0,
          wrong:0
       },
       {
          name:"Jack Kitchen",
          correct:0,
          wrong:0
       },
       {
          name:"Jill Babb",
          correct:0,
          wrong:0
       },
       {
          name:"Kristi Mainali",
          correct:0,
          wrong:0
       },
       {
          name:"Ginger Sander",
          correct:0,
          wrong:0
       },
       {
          name:"Gilligan Bush",
          correct:0,
          wrong:0
       }
    ];

qac.latestData = function(){
    return LocalStorageService.getData();
};

qac.update = function(val){
    return LocalStorageService.setData(val);
};


}]);

myModule.factory("LocalStorageService", function($window, $rootScope) {
    
    angular.element($window).on('storage', function(event) {
        if (event.key === 's-storage') {
            $rootScope.$apply();
        }
    });    
    
    return {
        setData: function(val) {
            $window.localStorage && $window.localStorage.setItem('s-storage', val);
            return this;
        },
        getData: function() {
            
            var val = $window.localStorage && $window.localStorage.getItem('s-storage');
            
            var data = angular.fromJson(val);
            
            return data; 
        }
    };
});