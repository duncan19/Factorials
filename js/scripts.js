$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var result = 1
    var userNumber = $("input#operator").val();
    for(i = 0; i <= userNumber - 1; i ++) {
     var newNumber = userNumber -i;
     var result = newNumber * result;
     
    }
    console.log(result);
  });
});