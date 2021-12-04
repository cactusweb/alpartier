

  let xDown;
  let yDown;
  let currentSection = 1;
  
  function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
  
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
  
  function handleTouchMove(evt) {
      let direction = '';
      if ( ! xDown || ! yDown ) {
          return;
      }
  
      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;
  
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
  
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            direction = 'left'
          } else {
            direction = 'right'
          }                       
      } else {
          if ( yDiff > 0 ) {
            direction = 'up'
          } else { 
            direction = 'down';
          }                                                                 
      }
      /* reset values */
      xDown = null;
      yDown = null;
      return direction;                                          
  };

