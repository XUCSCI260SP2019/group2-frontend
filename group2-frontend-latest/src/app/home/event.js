$(document).ready(function() {
    $.ajax({
        url: "http://localhost:4200/events/events"
    }).then(function(data) {
       $('.event.id').append(event.id);
       $('.event-name').append(event.name);
       $('.event-startTime').append(event.startTime);
       $('.event-requestor').append(event.requestor);
       $('.event-room').append(event.room);
       $('.event-status').append(event.status);
    });
});