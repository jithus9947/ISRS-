$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('button').click(function(){
    $('#search').keyup(function(){
     $('#result').html('');
      $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('db.json', function(data) {
        $.each(data, function(key, value){
          var data1=[];
          if (value.Keyword.search(expression) != -1 )
          {
              $.each(data, function(key, value){
                  data1 += '<tr>';
                  data1 += '<td>'+value.CVEID+'</td>';
                  data1 += '<td>'+value.Rank&Forum+'</td>';
                  data1 += '<td>'+value.VulnurabilityType+'</td>';
                  data1 += '<tr>';
                });
          $('#keytable').append(data1);   
    }
    });
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});