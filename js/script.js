
$(function(){

var h_hght = 340; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
// var route=$(".logo-menu-allways-on-top").offset().left;

function showTopMenu() {
  // var route=$(".logo-menu-allways-on-top").offset().left;
  $('.menu-allways-on-top').hide();
  $(window).scroll(function(){
    var top = $(this).scrollTop();
    var elem = $('.menu-allways-on-top');
    if (top+h_mrg < h_hght) {
      elem.css('top', (h_hght-top));
      $(".logo-menu-allways-on-top").animate({marginLeft:"-26px"},100);
      $('.menu-allways-on-top').hide();
      // hideLogMenu();
    } 
    else {
      elem.css('top', h_mrg);
      $('.menu-allways-on-top').fadeIn("slow");
      if ($(".logo-menu-allways-on-top").offset().left<0) {
      $(".logo-menu-allways-on-top").animate({
        marginLeft: "170px"
      },650);
      //showLogoMenu();
    }
  }
  })
}

// function hideLogMenu() {
//     $(".logo-menu-allways-on-top").animate({
//       marginLeft:route
//     },800);
//     console.log('kkkkkkkkkkkk');
// }

function showLogoMenu() {
  // $("#logo").hover(function(){
    console.log('qqqqqqq');
    if ($(".logo-menu-allways-on-top").offset().left<0) {
      $(".logo-menu-allways-on-top").animate({
        marginLeft: "200px"
      },300);
    }
    // else {
    //   $(".logo-menu-allways-on-top").animate({
    //     marginLeft:route
    //   },800);
    // }
 // });
}


  showTopMenu(); 
})


