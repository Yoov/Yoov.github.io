$(document).ready(function(){

  $calendar = $('#calendar');
  $eventContext = $('#event-context');
  $calendar.fullCalendar({
    defaultView: 'agendaWeek',
    businessHours: true,
    overlap: false,
    header: {
      left: 'prev,next, today',
      center: 'title',
      right: 'agendaWeek,agendaDay'
    },
    dayClick: function(date, event, view) {
      if ($eventContext.is(':visible')) { return false; }

      if (view.name !== 'agendaWeek' && view.name !== 'agendaDay') {
        return false;
      }
      var newEvent = {
        title: 'new event',
        allDay: false,
        editable: true,
        start: $.fullCalendar.moment(date),
        end: $.fullCalendar.moment(date).add(30, 'm')
      };
      $calendar.fullCalendar('renderEvent', newEvent);
    },
  });
});
