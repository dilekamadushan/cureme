// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'pdf']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        }
      }
    })
  
  .state('app.prescriptions', {
    url: '/prescriptions',
    views: {
      'menuContent': {
        templateUrl: 'templates/prescriptions.html', 
        controller: 'PrescriptionController'
      }
    }
  })
  .state('app.prescription', {
    url: '/prescription/:prescriptionId/:state',
    views: {
      'menuContent': {
        templateUrl: 'templates/prescription.html',
        controller: 'PrescriptionController'
      }
    }
  })
  .state('app.reports', {
      url: '/reports',
      views: {
        'menuContent': {
          templateUrl: 'templates/reports.html', 
          controller: 'ReportController'
        }
      }
    })
    .state('app.reports.reportId', {
      url: '/report/:reportId',
      views: {
        'menuContent': {
          templateUrl: 'templates/report.html', 
          controller: 'ReportController'
        }
      }
    })
    .state('app.reminders', {
      url: '/reminders',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        }
      }
    })
    .state('app.articles', {
      url: '/articles',
      views: {
        'menuContent': {
          templateUrl: 'templates/articles.html',
          controller: 'ArticleController'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});


app.run(function($rootScope){

  $rootScope.user = {
    name : 'Patient Name', 
    age : 25
  }

  $rootScope.prescriptions = [
      {"date":"1970-07-25","medicalOfficer" : "Caesar Carroll",
        "pendingDrugs" : 4,
         "pendingReports" : 0,         
        "drugs":[
          {"name":"Corex","dose":9,"usage":"Daily", "pending" : true},
          {"name":"Corex","dose":1,"usage":"Night only", "pending" : true},
          {"name":"Panadol","dose":0,"usage":"Morning Only", "pending" : true},
          {"name":"Derypyllin","dose":2,"usage":"Night only", "pending" : true}
          ]},
      {"date":"1977-07-26","medicalOfficer" : "Yasmine Bernier",
      "pendingDrugs" : 0, 
      "pendingReports" : 0,
      "drugs":[
          {"name":"Azithromyzin","dose":1,"usage":"Night only", "pending" : false},
          {"name":"Azithromyzin","dose":9,"usage":"Night only", "pending" : false},
          {"name":"Derypyllin","dose":4,"usage":"Daily", "pending" : false},
          {"name":"Derypyllin","dose":3,"usage":"Daily", "pending" : false},
          {"name":"Corex","dose":4,"usage":"Daily", "pending" : false}
          ],
      "reports" : [
          {"name": "Blood Sugar", "type": "Blood", "instructions" : "Some instaructions for the test", "pending" : false}
        ]},
        
      {"date":"1989-10-10","medicalOfficer" : "Krista Sawayn",
        "pendingReports" : 1,
        "pendingDrugs" : 3, 
        "drugs":[
          {"name":"Panadol","dose":0,"usage":"Daily", "pending" : true},
          {"name":"Derypyllin","dose":1,"usage":"Daily", "pending" : false},
          {"name":"Corex","dose":2,"usage":"Night only", "pending" : true},
          {"name":"Corex","dose":9,"usage":"Morning Only", "pending" : false},
          {"name":"Derypyllin","dose":3,"usage":"Daily", "pending" : true}
          ],
        "reports" : [
          {"name": "Blood Sugar", "type": "Blood", "instructions" : "Some instaructions for the test", "pending" : true}
        ]}]

    $rootScope.reports = [
      {"creator":"Caesar Carroll IV","date":"1983-12-04","url":"http://lorempixel.com/640/480/?70150", "type": "Blood Report"},
      {"creator":"Krista Sawayn V","date":"2014-11-03","url":"http://lorempixel.com/640/480/?47123", "type": "Urine Report"},
      {"creator":"Yasmine Bernier","date":"1973-12-01","url":"http://lorempixel.com/640/480/?93873", "type": "Blood Report"},
      {"creator":"Jonathan Stoltenberg","date":"2010-09-01","url":"http://lorempixel.com/640/480/?22065", "type": "Blood Report"},
      ]
    
        
});

