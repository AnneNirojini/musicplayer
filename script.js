SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });

  $(document).ready(function() {
    SC.stream('/tracks/301653699',function(sound){
        $('#start-1').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          $('#stop-1').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
     });
    }); 

    $(document).ready(function() {
      SC.stream('/tracks/785870452',function(sound){
          $('#start-2').click(function(e) {
              e.preventDefault();
              sound.start();
            });
            $('#stop-2').click(function(e) {
              e.preventDefault();
              sound.stop();
            });
       });
      }); 

      $(document).ready(function() {
        SC.stream('/tracks/598831266',function(sound){
            $('#start-3').click(function(e) {
                e.preventDefault();
                sound.start();
              });
              $('#stop-3').click(function(e) {
                e.preventDefault();
                sound.stop();
              });
         });
        }); 

        $(document).ready(function() {
          SC.stream('/tracks/512660685',function(sound){
              $('#start-4').click(function(e) {
                  e.preventDefault();
                  sound.start();
                });
                $('#stop-4').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });
           });
          }); 

          $(document).ready(function() {
            SC.stream('/tracks/202631934',function(sound){
                $('#start-5').click(function(e) {
                    e.preventDefault();
                    sound.start();
                  });
                  $('#stop-5').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
             });
            }); 

            $(document).ready(function() {
              SC.stream('/tracks/348114554',function(sound){
                  $('#start-6').click(function(e) {
                      e.preventDefault();
                      sound.start();
                    });
                    $('#stop-6').click(function(e) {
                      e.preventDefault();
                      sound.stop();
                    });
               });
              }); 

              $(document).ready(function() {
                SC.stream('/tracks/295928473',function(sound){
                    $('#start-7').click(function(e) {
                        e.preventDefault();
                        sound.start();
                      });
                      $('#stop-7').click(function(e) {
                        e.preventDefault();
                        sound.stop();
                      });
                 });
                }); 

                $(document).ready(function() {
                  SC.stream('/tracks/1018430074',function(sound){
                      $('#start-8').click(function(e) {
                          e.preventDefault();
                          sound.start();
                        });
                        $('#stop-8').click(function(e) {
                          e.preventDefault();
                          sound.stop();
                        });
                   });
                  }); 

                  $(document).ready(function() {
                    SC.stream('/tracks/334733635',function(sound){
                        $('#start-9').click(function(e) {
                            e.preventDefault();
                            sound.start();
                          });
                          $('#stop-9').click(function(e) {
                            e.preventDefault();
                            sound.stop();
                          });
                     });
                    }); 

    