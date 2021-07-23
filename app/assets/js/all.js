$(document).ready(() => {
  var scrollTime;     //負責視窗捲動時偵測等待的時間

  //判斷往上捲出的高度是否已超過header的高度, 如果header已捲出畫面則加上fixed的class名稱
  function checkHeader(){
    if( $(document).scrollTop() >= $('header').height() ){
      $('header').addClass('fixed');
    }
    if( $(document).scrollTop() == 0 ){
      $('header').removeClass('fixed');
    }
  }
  checkHeader();

  //當視窗捲動時==============================================================================
  $(window).scroll(function(){
    clearTimeout(scrollTime);
    scrollTime = setTimeout(function(){ checkHeader(); },100);
  });

  $('.tabs a').click(function(){
      //移除所有active
      $('.tab').removeClass('active');
      //當前的元素li加上active
      $(this).parent().addClass('active');

      //display content
      let currentTab = $(this).attr('href');
      $('.product-main>div').hide();
      $(currentTab).show();

      return false;
  });

});