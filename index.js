 let now = moment();
    $(".saveItem").on("click", function() {
      var value = $(this).siblings(".todo-text").val();
      var time = now.format();
      localStorage.setItem(time, value);
      console.log(time, value);
    });

    var currentDate = document.getElementById(".timeContainer");
    function displayDate () 
    { var currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();
    $(".timeContainer").append(day + "/" + month + "/" + year);
    }
    displayDate();
    