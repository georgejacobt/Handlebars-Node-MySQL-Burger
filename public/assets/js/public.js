// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".eat-it").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
  
      var newDevourState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#br").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
    // $(document).on("click", ".delete-cat",function(){
    //   alert("here is a click");
    // })
  
  
    $(document).ready(function () {
  
      $(".delete-cat").on("click", function(){
        alert("here is click")
      })
  
  
    });
  
  
  
  
  
  
  
  });
  