$(document).ready(function() {

/***instructions***/
var refererUrl = document.referrer;
if (refererUrl && refererUrl !== "") {
    $('#hidden-text-redirect-url').text(refererUrl);
} else {
    $('#hidden-text-redirect-url').text("Referrer information not available.");
}
/***instructions***/

function makePwdToggler(pwd){
   var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            var id = pwd.id ? pwd.id + 'toggler' : 'toggler-' + Math.random().toString(36).substr(2, 9); // Generate a unique ID if pwd.id is undefined

            checkbox.setAttribute('id', id);

            var label = document.createElement('label');
            label.setAttribute('for', id);

            // Add class to label
            label.classList.add('show-password-label');

            // Add initial text to label
            var labelText = document.createTextNode('Show password');
            label.appendChild(labelText);

            var div = document.createElement('div');
            div.appendChild(checkbox);
            div.appendChild(label);

            // Add show-password checkbox under password input
            pwd.insertAdjacentElement('afterend', div);

            // Add toggle password callback
            function toggle() {
                if (pwd.type === 'password') {
                    pwd.type = 'text';
                    labelText.nodeValue = 'Hide password';
                } else {
                    pwd.type = 'password';
                    labelText.nodeValue = 'Show password';
                }
            }
            checkbox.onclick = toggle;
            // For non-mouse usage
            checkbox.onkeydown = toggle;
}

function setupPwdTogglers(){

  //var pwdInputs = document.querySelectorAll('input[type=password]');
   // var pwdInputs = document.querySelectorAll('input[type=password]');
   var password = document.getElementById('password'); 
   var newPassword = document.getElementById('newPassword'); 
    var reenterPassword = document.getElementById('reenterPassword'); // Use ID selector for 'reenterPassword'

//console.log(pwdInputs,"pwdInputs");
   console.log(password,"password");
   console.log(newPassword,"newPassword");
   console.log(reenterPassword,"reenterPassword");
   // for (var i = 0; i < pwdInputs.length; i++) {
    //    makePwdToggler(pwdInputs[i]);
    //}

    if (password) {
       makePwdToggler(password);
    }
      if (newPassword) {
       makePwdToggler(newPassword);
    }
      if (reenterPassword) {
       makePwdToggler(reenterPassword);
    }
}
    setupPwdTogglers();

    $('#createAccount').after(' for an account');

});
