
function amPm(hours) {
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
}
amPm();



$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {
    
        // made a row to put the columns in
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // hour column
        var columnOne = $('<p class="hour">' + amPm(i) + '</p>');

        //event column
        var columnTwo = $(`<textarea id=text${i} class="event" placeholder="Scheduled Events..."></textarea>`);        
       
        //save column
        var columnThree = $(`<button class="saveBtn" id=${i}></button>`)
        
        row.append(columnOne);
        row.append(coumnTwo);
        row.append(columnThree);
        $(".container").append(row);




        


        var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    updatetime();
    
    function updatetime() {
      var currentTime = moment().format('H');
      for(var i = 0; i < timeOfday.length; i++) {
    
        if (parseInt(timeOfday[i]) > currentTime) {
          $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");
    
    
        }
        else if (parseInt(timeOfday[i]) < currentTime) {
          $("#" + timeOfday[i]).attr("style", "background-color: lightgray");
    
        }
        else if (parseInt(timeOfday[i]) == currentTime) {
          $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
        
        }
      }
    }


