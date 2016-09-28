(function() {
  'use strict';
  var angular  = require('angular');
  angular.module('iQuit', [require('angular-animate'),
                           require('angular-formly'),
                           require('angular-formly-templates-bootstrap'),])
  .controller('mainCtrl', mainCtrl);

  function mainCtrl() {
    var vm = this;
    // The model object that we reference
    // on the  element in index.html
    vm.rental = {};

    // An array of our form fields with configuration
    // and options set. We make reference to this in
    // the 'fields' attribute on the  element
    vm.rentalFields = [
        {
            key: 'name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Your Name',
                placeholder: 'Michael Kang',

            }
        },
        {
            key: 'boss',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Boss',
                placeholder: 'John Doe',

            }
        },
        {
            key: 'company',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Company',
                placeholder: 'THE COMPANY',

            }
        },
        {
            key: 'time',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Time at Company',
                placeholder: '4 YEARS 3 MONTHS',

            }
        },
        {
            key: 'Reason',
            type: 'textarea',
            templateOptions: {
                type: 'text',
                label: 'Reason',
                placeholder: "I DON'T CARE ANY MORE.",

            }
        },
    ];
  }
})();
