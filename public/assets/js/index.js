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
      const id = $(this).data("id");
      const newStatus = $(this).data("newstatus");
  
      const newStatusState = {
        status: newStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newStatusState
      }).then(
        function() {
          console.log("changed status to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#burger-name").val().trim(),
        devoured: $("[name=status]:checked").val().trim() 
    
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
        dataType: "json",
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  