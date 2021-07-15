$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('db.json', function(data) {
   $.each(data, function(key, value){
    if (value.name.search(expression) != -1 || value.location.search(expression) != -1)
    {
        $.each(data, function(key, value){
            employee_data += '<tr>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.username+'</td>';
            employee_data += '<td>'+value.email+'</td>';
            employee_data += '<tr>';
          });
          $('#employee_table').append(employee_data);

    }
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});