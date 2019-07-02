$(document).ready(function() {
    var start = $('#start-time');
    var end = $('#end-time');

    $('.clockpicker').clockpicker();

    $('.clockpicker', function() {
        $('input').on('change', function(event) {
            if(start.val() && end.val()) {
                var startTime = new Date("1/1/1970 " + start.val());
                var endTime = new Date("1/1/1970 " + end.val());

                if(startTime < endTime) {
                    var diff = formatDate((endTime - startTime) / 1000);
                    $('#result-time').val(diff);
                }
            }
        })
    })
});

function formatDate(diff) {
   var hours = parseInt( diff / 3600 ) % 24;
   var minutes = parseInt( diff / 60 ) % 60;
   var seconds = diff % 60;

   return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
}
