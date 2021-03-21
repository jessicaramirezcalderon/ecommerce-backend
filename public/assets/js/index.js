// * Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

// * Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

// * Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

// * Your app will store every burger in a database, whether devoured or not.

// Make sure we wait to attach our handlers until the DOM is fully loaded.

// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
    $(".delete-button").on("click", function(event) {
      console.log("Delete worked");
      console.log(this);
      const button = $(this);
      // grabs id from button
      const id = button.attr("data-id");
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function(results) {
          console.log(results);
          location.reload();
        }
      );
    });
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed status to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  