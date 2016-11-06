var controllers = angular.module('starter.controllers', ['starter']);

controllers.controller('HomeController', ['$scope', function($scope){

}]);

controllers.controller('PrescriptionController', ['$scope', '$stateParams', '$rootScope', function($scope, $stateParams, $rootScope){
  
  $scope.index = $stateParams.prescriptionId;

  $scope.state = $stateParams.state;

  $scope.prescriptions = $rootScope.prescriptions;
  
  $scope.toggleStatus = function(type){

    count = 0;

    if( type == 'drugs'){

      for(i=0; i < $scope.prescriptions[$scope.index].drugs ; i= i +1){
        
        if( $scope.prescriptions[$scope.index].drugs[i].pending){
          count = count + 1;
        }
      
      }
      
      $scope.prescriptions[$scope.index].pendingDrugs = count;
      
    }
    else{

      for(i=0; i < $scope.prescriptions[$scope.index].reports.length; i= i +1){
        
        if( $scope.prescriptions[$scope.index].reports[i].pending){
          count = count + 1;
        }
      
      }
      
      $scope.prescriptions[$scope.index].pendingReports = count;
      
    }
  }; 

}]);


controllers.controller('ReportController', ['$scope', '$ionicModal', 'InvoiceService', function($scope, $ionicModal, InvoiceService){

  $ionicModal.fromTemplateUrl('pdf-viewer.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
  
  $scope.createReport = function(){
    var invoice = $scope.getDummyData();
        InvoiceService.createPdf(invoice)
          .then(function(pdf) {
              var blob = new Blob([pdf], {type: 'application/pdf'});
              $scope.pdfUrl = URL.createObjectURL(blob);
              $scope.modal.show();
          });
  }

  $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });

  $scope.setDefaultsForPdfViewer = function($scope) {
        $scope.scroll = 0;
        $scope.loading = 'loading';

        $scope.onError = function (error) {
            console.error(error);
        };

        $scope.onLoad = function () {
            $scope.loading = '';
        };

        $scope.onProgress = function (progress) {
            console.log(progress);
        };
    }

    $scope.getDummyData = function() {
        return {
            Date: new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" }),
            AddressFrom: {
                Name: chance.name(),
                Address: chance.address(),
                Country: chance.country({ full: true })
            },
            AddressTo: {
                Name: chance.name(),
                Address: chance.address(),
                Country: chance.country({ full: true })
            },
            Items: [
                { Description: 'White Blood Count', Quantity: '1', Price: '700' },
                { Description: 'Platelet Count', Quantity: '2', Price: '100' }
            ],
            Subtotal: '€2010',
            Shipping: '€6',
            Total: '€2016'
        };
    }

    $scope.setDefaultsForPdfViewer($scope);
}]);

controllers.controller('ArticleController', ['$scope', function($scope){

}]);

controllers.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

controllers.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});

controllers.controller('PlaylistCtrl', function($scope, $stateParams) {
});
