window.addEventListener('load', function () {
  // Task 3
  $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  // Task 2
  const amenityID = {};
  $('input[type=checkbox]'.change(function () {
    if ($(this).prop('checked')){
      amenityID[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityID[$(this).attr('data-id')];
    } 
    if (Object.keys(amenityID).length === 0) {
      $('div.amenities h4'.html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityID).join(', '));
    }
  });
});
