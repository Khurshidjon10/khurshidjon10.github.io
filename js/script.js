$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.svg"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/right.svg"> </button>',
        resposive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false}
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    //modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow')
    });
    $('.modal__close').on('click', function(){
        $('.overlay,#consultation, #order, #thank').fadeOut('slow');
    });


    $('.fadein').each(function(i) {
        $(this).on('click', function(){
            $('#order .modal__desc').text($('.catalog__subtitile').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('input[name=phone]').mask("+(9989) 9-99-99");

  }); 