(() => {
    'use strict';
    // Page is loaded
    console.log('script.js');
    const objects = document.getElementsByClassName('asyncImage');
    console.log('objects: ', objects);
    // 'objects' are each img, take all of them and excute this function
    // for each 'item' which is each img
    Array.from(objects).map((item) => {
        console.log('item: ', item);
        //  using image constructor, make a new img using JS
        const img = new Image();
        // take the src of this new Image and give it the src of on of our images
        img.src = item.dataset.src;
        console.log('HIGH-RES --> img.src: ', img.src);
      
        // LOADS HIGH RES IMG
        img.onload = () => {
            console.log('HIGH-RES IMG loaded...');
            item.style.background = 'url("'+ img.src +'") no-repeat center center scroll cover';
            item.classList.add('FadeIn');
        // item.classList.remove('asyncImage');
        //     console.log('async class removed...');
        // if the Item's nodeName = IMG ? set the new src : ELSE set background
            
        


        // if (item.nodeName === 'IMG') {
        //     console.log("3 secs till img is swapped...");
        //     setTimeout(function(){
                
        //         item.style.background = 'url("'+ item.dataset.src +'")';
        //         // item.src = item.dataset.src;
        //         item.classList.add('FadeIn');
        //     },3000);
            
        // } else {
        //     null;
        //     // item.style.backgroundImage = `url(${item.dataset.src})`;
        // }    
      };

    });
  })();