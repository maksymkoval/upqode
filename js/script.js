$(document).ready(function(){
    $('.navbar ul li:first').addClass('active');
    $('.navbar ul li').on('click', function(){
    $('.navbar ul li').removeClass('active')
    $(this).addClass('active');
    $(this).find('a').attr('href');
    })
    $('.nav-lines').on('click', function(){
        $('.navbar').toggleClass('active');
    })
    $('.navbar2 ul li:first').addClass('active');
    $('.navbar2 ul li').on('click', function(){
    $('.navbar2 ul li').removeClass('active')
    $(this).addClass('active');
   $(this).find('a').attr('href');
    }) 
     $('.container2').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:true
      });
      $('.slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:false,
        swipe:false  
      });
      $('.info').slick({
        infinite: false, 
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:false,
        swipe:false  
      });
      $('.prev-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:false,
        swipe:false  
      });
      $('.next-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:false,
        swipe:false  
      });
      $('.prev').on('click', function(){
        $('.slider').slick('slickPrev')
        $('.prev-slider').slick('slickPrev')
        $('.next-slider').slick('slickPrev')
        $('.info').slick('slickPrev')
    });
    $('.next').on('click', function(){
      $('.slider').slick('slickNext')
      $('.next-slider').slick('slickNext')
      $('.prev-slider').slick('slickNext')
      $('.info').slick('slickNext')
  });
  
})
