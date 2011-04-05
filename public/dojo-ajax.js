$(function (){

  $('[name="estado"]').bind('change',function (e){
  
    var estado = $(this).val().toLowerCase();
    
    $.ajax({
    
      url:'http://localhost:4567/cities/' + estado,
      type:'GET',
      dataType:'json',
      success: function (data){
      
        $('[name="cidade"]').empty().attr('disabled','disabled');
        
        if (data && data.cities){
          
          for (var c in data.cities){
          
            $('[name="cidade"]').append(
              $('<option></option>')
                .text(data.cities[c])
                .val(data.cities[c])
            ).removeAttr('disabled');
          }
        }
      }
    });
    
    e.stopPropagation();
  });
});