
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
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + amPm(i) + '</p>');

        //event column
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="event" placeholder="Scheduled Events..."></textarea>`);        
       
        //save column
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
        row.append(col1);
        row.append(col2);
        row.append(col3);


