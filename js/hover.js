   $(document).ready(function(){

   
// var pink = 'rgba(250,177,211,1)';
// var yellow = 'rgba(255,255,82,1)';
// var blue = 'rgba(200,230,250,1)';
// var green = 'rgba(80,190,171,1)';
// var sand = 'rgba(210,180,145,1)';
// var green2 = 'rgba(130,200,160,1)';

var colorArray = ['green2','yellow','blue','green','pink','sand'];
var rando = colorArray[(Math.floor(Math.random()* colorArray.length))];
var colorDiv = '<div class="fadeIn'+rando+'";></div>';

        $('.portfolio-item').on('mouseenter', function(event){
            
                            

            var eventObject = event.currentTarget;
            var hiddenDiv = eventObject.getElementsByTagName('div');
            var aTag = $(event.currentTarget).find('a');
            var imgTag = $(aTag).find('img');
            
                
            // console.log(colorDiv);

            // console.log(event.currentTarget);
            $(hiddenDiv).append(colorDiv);
            $(hiddenDiv).css('visibility','visible');
            $(hiddenDiv).addClass('textChange');
            $(imgTag).addClass('fadeIn');
            // $(hiddenDiv).append(colorDiv);
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
        



    




    
        

