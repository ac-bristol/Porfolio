(function($) {
// global vars

  //var winWidth = $(window).width();
  //var winHeight = $(window).height();
  
  //set cookie info
  
  var cookieSet = function(){
    
    function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
    }
    
    function getCookie(c_name) {
       var i,x,y,ARRcookies=document.cookie.split(";");
       for (i=0;i<ARRcookies.length;i++)
        {
           x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
              y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
              x=x.replace(/^\s+|\s+$/g,"");
              if (x==c_name)
              {
                  return unescape(y);
              }
        }
     }
    
    if(getCookie('visited')) {
     console.log("returning");
     $('#home-intro').show();
    } else {
      setCookie('visited',1,365);
      console.log("new");
      $('#home-intro').show();
    }
    
  }

  // set initial div height / width
  var setIntroHeight = function(){
    
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    
    $('#home-intro').css({
        'height': winHeight
    });
    
  }
  var goTo = function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      } 
    });
  }
  
  $( window ).load(function() {
    setIntroHeight();
    goTo();
    //cookieSet();
  });

  $( window ).resize(function() {
    setIntroHeight();
  });

  // make sure div stays full width/height on resize
  
})(jQuery);