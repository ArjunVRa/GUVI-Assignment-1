$(document).ready(function() {
    $.ajax({
      url: "php/profile.php", // URL of your PHP script
      type: "GET",
      success: function(response) {
        var data = JSON.parse(response);
        $("#profileName").text(data.name);
        $("#profileEmail").text(data.email);
        $("#profileAddress").text(data.address);
        $("#profileDob").text(data.dob);
        $("#profilePhone").text(data.phone);
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });
  