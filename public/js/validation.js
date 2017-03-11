 $(document).ready(function() {
     $('#signupform')
         .form({
             fields: {
                 firstname: {

                     rules: [{
                         type: 'empty',
                         //  prompt: 'please enter your fist name'
                     }]
                 },
                 lastname: {

                     rules: [{
                         type: 'empty',
                         //  prompt: 'please enter your last name'
                     }]
                 },
                 email: {

                     rules: [{
                             type: 'empty',
                             //  prompt: 'Please enter your email'
                         },
                         {
                             type: 'email',
                             //  prompt: 'invalid email address'
                         }
                     ]
                 },
                 password: {

                     rules: [{
                             type: 'empty',
                             //  prompt: 'Please enter a password'
                         },
                         {
                             type: 'length[6]',
                             //  prompt: 'Your password must be at least 6 characters'
                         }
                     ]
                 },
                 terms: {

                     rules: [{
                         type: 'checked',
                         //  prompt: 'You must agree to the terms and conditions'
                     }]
                 }
             },
             onSuccess: function(event, fields) {
                 $('#info').html("on success");
                 console.log("on success");
                 console.log(fields);
                 this.submit();
                 event.preventDefault();
             },
             onFailure: function(formErrors, fields) {
                 $('#info').html("on failure");
                 console.log("on failure");
                 console.log(fields);
             }
         });


     $('#loginform')
         .form({
             fields: {

                 loginEmail: {

                     rules: [{
                             type: 'empty',
                             prompt: 'email can\'t be empty'
                         },
                         {
                             type: 'email',
                             prompt: 'invalid email address'
                         }
                     ]
                 },
                 loginPassword: {

                     rules: [{
                         type: 'empty',
                         prompt: 'Please enter your password'
                     }]
                 }

             },
             onSuccess: function(event, fields) {
                 
                 $('#signupform').submit();
                 $('#loginInfo').html("on success");
                 
                 event.preventDefault();
             },
             onFailure: function(formErrors, fields) {
                 $('#loginInfo').html("on failure");
                 console.log("on failure");
                 console.log(fields);
             }

         });


     $('#signUpButton').on('click', function() {

         $('#signupform').form('validate form');
     });

     $('#loginButton').on('click', function() {

         $('#loginform').form('validate form');
     });

 });