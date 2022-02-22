let a = $.getJSON("team.json")
  .done(function (data) {
    $.each(data.members, function (key, val) {
      console.log("data key: ", key, " and data value: ", val);

      $("#team").append(`<div>
          <h2 id="Name">${val.name}</h2>
          <h5 id= "Position">${val.position}</h5>
          <p id="Bio">${val.bio}</p>
        </div>`);
    });
    console.log("The object are: ", a);
  })
  .fail(function () {
    $("#team").text("Something went wrong!! couldn't display content");
  });

$.get("index.html", function (data) {
    console.log("The data returned is: ", data);
    $("#index").html(data);
  },
  "html",
  "css"
);