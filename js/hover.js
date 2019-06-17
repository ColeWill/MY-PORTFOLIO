$(document).ready(function(){


        $('.portfolio-item').on('mouseenter', function(event){

            console.log('mouse just entered');

            var eventObject = event.currentTarget; 
            //this is the object that the mouse enter is on
            var hiddenDiv = eventObject.getElementsByTagName('div'); 
            //gets the div
            var aTag = $(event.currentTarget).find('a');
            // var aTag1 = eventObject.getElementsByTagName('a');
            var imgTag = $(aTag).find('img');
            // gets the image
            
            $(hiddenDiv).fadeIn(1200);
            $(imgTag).fadeTo(1000, .38);
            // $(aTag1).addClass('slightHoverFade');
            console.log('slightHoverFade added!');
           
            // changes opacity of the div  
        }) // -->--> callback for mouse leave

            $('.portfolio-item').on('click', function(event){
                var eventObject = event.currentTarget;
                var hiddenDiv = eventObject.getElementsByTagName('div');

                console.log('you cliked a portio Item');
                console.log('hidden div', hiddenDiv);
                $(hiddenDiv).html("<div class='loader'></div>");

                $(hiddenDiv).css('visibility', 'visible');
                console.log(hiddenDiv);
                $(hiddenDiv).fadeIn(200);
                setTimeout(function () {
                    
                }, 3000);
            })
            .on('mouseleave', function(event){
                // console.log('mouse left');
                var eventObject = event.currentTarget;
                var hiddenDiv = eventObject.getElementsByTagName('div');
                var aTag1 = eventObject.getElementsByTagName('a');
                // var imgTag = $(aTag).find('img');

                $(hiddenDiv).fadeOut(1200);
                // $(aTag1).removeClass('slightHoverFade');
                var aTag = $(event.currentTarget).find('a');
                var imgTag = $(aTag).find('img');
                $(imgTag).fadeTo(1200, 1);
                // console.log('slightHoverFade Removed');
               
            });
    });
        



    




    
        

