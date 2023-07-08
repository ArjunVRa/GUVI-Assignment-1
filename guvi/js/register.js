/* function validate() {
  var name = $("#name");
  var email = $("#email");
  var password = $("#password");
  var confirmPassword = $("#confirmPassword");

  if (name.val().trim() === "") {
    name.addClass("invalid");
    return false;
  } else {
    name.removeClass("invalid");
  }

  if (email.val().trim() === "") {
    email.addClass("invalid");
    return false;
  } else {
    email.removeClass("invalid");
  }

  if (password.val().trim() === "") {
    password.addClass("invalid");
    return false;
  } else {
    password.removeClass("invalid");
  }

  if (confirmPassword.val().trim() === "") {
    confirmPassword.addClass("invalid");
    return false;
  } else {
    confirmPassword.removeClass("invalid");
  }

  if (password.val() !== confirmPassword.val()) {
    password.addClass("invalid");
    confirmPassword.addClass("invalid");
    alert("Passwords do not match");
    return false;
  } else {
    password.removeClass("invalid");
    confirmPassword.removeClass("invalid");
  }

  if (confirmPassword.val().trim().length < 5) {
    confirmPassword.addClass("invalid");
    return false;
  } else {
    confirmPassword.removeClass("invalid");
  }

  return true;
}
 */


/*$(document).ready(function() {
  $("#signupForm").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = $("#name");
    var email = $("#email");
    var password = $("#password");
    var confirmPassword = $("#confirmPassword");
    var address = $("#address");
    var dob = $("#dob");
    var phone = $("#phone");

    var isValid = true;

    // Validate name
    if (name.val().trim() === "") {
      name.addClass("is-invalid");
      isValid = false;
    } else {
      name.removeClass("is-invalid");
      name.addClass("is-valid");
    }

    // Validate email
    if (email.val().trim() === "") {
      email.addClass("is-invalid");
      isValid = false;
    } else {
      email.removeClass("is-invalid");
      email.addClass("is-valid");
    }

    // Validate password
    if (password.val().trim() === "") {
      password.addClass("is-invalid");
      isValid = false;
    } else {
      password.removeClass("is-invalid");
      password.addClass("is-valid");
    }

    // Validate confirm password
    if (confirmPassword.val().trim() === "") {
      confirmPassword.addClass("is-invalid");
      isValid = false;
    } else {
      confirmPassword.removeClass("is-invalid");
      confirmPassword.addClass("is-valid");
    }

    // Validate password match
    if (password.val() !== confirmPassword.val()) {
      password.addClass("is-invalid");
      confirmPassword.addClass("is-invalid");
      isValid = false;
      alert("Passwords do not match");
    } else {
      if (password.val().trim() !== "") {
        password.removeClass("is-invalid");
        password.addClass("is-valid");
        confirmPassword.removeClass("is-invalid");
        confirmPassword.addClass("is-valid");
      } else {
        password.removeClass("is-valid");
        confirmPassword.removeClass("is-valid");
      }
    }

    // Validate address
    if (address.val().trim() === "") {
      address.addClass("is-invalid");
      isValid = false;
    } else {
      address.removeClass("is-invalid");
      address.addClass("is-valid");
    }

    // Validate date of birth
    if (dob.val().trim() === "") {
      dob.addClass("is-invalid");
      isValid = false;
    } else {
      dob.removeClass("is-invalid");
      dob.addClass("is-valid");
    }

    // Validate phone number
    if (phone.val().trim() === "") {
      phone.addClass("is-invalid");
      isValid = false;
    } else {
      phone.removeClass("is-invalid");
      phone.addClass("is-valid");
    }

    if (isValid) {
      // Proceed with form submission or further processing
      $("#signupForm")[0].submit(); // Submit the form
    }
  });
});*/





$(document).ready(function() {
  $("#signupForm").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = $("#name");
    var email = $("#email");
    var password = $("#password");
    var confirmPassword = $("#confirmPassword");
    var address = $("#address");
    var dob = $("#dob");
    var phone = $("#phone");

    var isValid = true;

    // Validate name
    if (name.val().trim() === "") {
      name.addClass("is-invalid");
      isValid = false;
    } else {
      name.removeClass("is-invalid");
      name.addClass("is-valid");
    }

    // Validate email
    if (email.val().trim() === "") {
      email.addClass("is-invalid");
      isValid = false;
    } else {
      email.removeClass("is-invalid");
      email.addClass("is-valid");
    }

    // Validate password
    if (password.val().trim() === "") {
      password.addClass("is-invalid");
      isValid = false;
    } else {
      password.removeClass("is-invalid");
      password.addClass("is-valid");
    }

    // Validate confirm password
    if (confirmPassword.val().trim() === "") {
      confirmPassword.addClass("is-invalid");
      isValid = false;
    } else {
      confirmPassword.removeClass("is-invalid");
      confirmPassword.addClass("is-valid");
    }

    // Validate password match
    if (password.val() !== confirmPassword.val()) {
      password.addClass("is-invalid");
      confirmPassword.addClass("is-invalid");
      isValid = false;
      alert("Passwords do not match");
    } else {
      if (password.val().trim() !== "") {
        password.removeClass("is-invalid");
        password.addClass("is-valid");
        confirmPassword.removeClass("is-invalid");
        confirmPassword.addClass("is-valid");
      } else {
        password.removeClass("is-valid");
        confirmPassword.removeClass("is-valid");
      }
    }

    // Validate address
    if (address.val().trim() === "") {
      address.addClass("is-invalid");
      isValid = false;
    } else {
      address.removeClass("is-invalid");
      address.addClass("is-valid");
    }

    // Validate date of birth
    if (dob.val().trim() === "") {
      dob.addClass("is-invalid");
      isValid = false;
    } else {
      dob.removeClass("is-invalid");
      dob.addClass("is-valid");
    }

    // Validate phone number
    if (phone.val().trim() === "") {
      phone.addClass("is-invalid");
      isValid = false;
    } else {
      phone.removeClass("is-invalid");
      phone.addClass("is-valid");
    }

    if (isValid) {
      // Proceed with AJAX request
      var formData = $(this).serialize(); // Serialize the form data
      $.ajax({
        url: "./php/register.php", // URL of your PHP script
        type: "POST",
        data: formData,
        success: function(response) {
          // Handle the success response
          alert(response);
          // Reset the form
          $("#signupForm")[0].reset();
        },
        error: function(xhr, status, error) {
          // Handle the error response
          console.error(error);
        }
      });
    }
  });
});

