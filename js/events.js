function getIt(){
  $("p").click(function(){
      alert ('Hey!');
    });
}

function frameIt(){
   $('img').addClass("tasty");
}

function pressIt(){
  $('form').keydown(function(key){
          if (key.which == 71){
           alert('G was pressed');
            }
          });
}

function submitIt(){
  $('form').submit(function(){
      alert('your form is going to be submitted now');
               });
}

   $(document).ready(function(){
         
          getIt();
          frameIt();
          pressIt();
          submitIt();
        
});
