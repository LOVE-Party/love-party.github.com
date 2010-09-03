function playVid(id)
{
  $("body").append('<div id="vid"><iframe src="http://youtube.com/embed/'+id+'"></iframe></div>');
  $("div#vid").animate({
    opacity: 1
  }, 500);
  $("div#vid").click(function(){
    $("div#vid").animate({
      opacity: 0
    }, 500, function() {
      $("div#vid").remove();
    });
  });
}
