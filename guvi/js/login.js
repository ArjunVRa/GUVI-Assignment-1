$(document).ready(function() {
  $("#loginForm").submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var name = $("#name");
    var password = $("#password");

    var isValid = true;

    if (name.val().trim() === "") {
      name.addClass("is-invalid");
      isValid = false;
    } else {
      name.removeClass("is-invalid");
      name.addClass("is-valid");
    }

    if (password.val().trim() === "") {
      password.addClass("is-invalid");
      isValid = false;
    } else if (password.val().length <= 5) {
      password.addClass("is-invalid");
      isValid = false;
      alert("Password must be more than 5 characters");
    } else {
      password.removeClass("is-invalid");
      password.addClass("is-valid");
    }

    if (isValid) {
      // Proceed with AJAX request
      var formData = $(this).serialize(); // Serialize the form data
      $.ajax({
        url: "./login.php", // URL of your PHP script
        type: "POST", // HTTP method (POST)
        data: formData,
        success: function(response) {
          // Handle the success response
          if (response === "success") {
            // Redirect to the profile page or perform further actions
            console.log("Success response:", response);
            window.location.href = "profile.html";
          } else {
            // Show an error message or perform further actions
            console.log("Failure response:", response);
            alert("Invalid login credentials");
            
          }
        },
        error: function(xhr, status, error) {
          // Handle the error response
          console.error("AJAX error:", error);
        }
      });
    }
  });
});
