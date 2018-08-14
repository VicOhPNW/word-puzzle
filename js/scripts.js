$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userText = $("#userText").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    console.log(vowels);
    var results = [];
    for (var index = 0; index < userText.length; index++){
      if (vowels.includes(userText[index])) {
      results.push("-");
      }
      else {
      results.push(userText[index]);
      }
    }
    $("#output").append(results);
    $("#userInput").hide();
  });
});
