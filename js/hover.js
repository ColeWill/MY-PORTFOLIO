   $(document).ready(function(){

   


        $('.portfolio-item').on('mouseenter', function(event){
            

            var eventObject = event.currentTarget;
            var hiddenDiv = eventObject.getElementsByTagName('div');
            var aTag = $(event.currentTarget).find('a');
            var imgTag = $(aTag).find('img');
                

            console.log(event.currentTarget);
            $(hiddenDiv).css('visibility','visible');
            $(hiddenDiv).addClass('textChange');
            $(imgTag).addClass('fadeIn');
            console.log(hiddenDiv);
        })
            .on('mouseleave', function(event){
                console.log('mouse left');
                var eventObject = event.currentTarget;
                var hiddenDiv = eventObject.getElementsByTagName('div');
                var aTag = $(event.currentTarget).find('a');
                var imgTag = $(aTag).find('img');

                $(hiddenDiv).css('visibility','hidden');
                $(imgTag).removeClass('fadeIn');
            });
    });
        



    




    
        

