$(function(){

    // ('.select-btn').click(function () {
    //     link = $('#selectLang').val()//벨류
    //     //  console.log(link);
    //     window.open(link);
    // })

    // 해외사이트 이동 버튼
    $('#btnLang').click(function(){
        link = $('#selectLang').val()
        window.open(link);
    });


    //첫번쨰 맨위 슬라이드 부분 01
    $('.sc-slide .slide-title').click(function(){
        $(this).parent('.slide-content').addClass('active').siblings('.slide-content').removeClass('active');

        if ($(this).parent().hasClass('slide1')) {
            slide2.autoplay.stop();
            if ($(this).parent().find(".pause").hasClass('active')) {
                slide1.autoplay.start();
            } else {
                slide1.autoplay.stop();
            }

        } else {
            slide1.autoplay.stop();
            if ($(this).parent().find(".pause").hasClass('active')) {
                slide2.autoplay.start();
            } else {
                slide2.autoplay.stop();
            }
        }
    });

    var slide1 = new Swiper(".slide1 .swiper", {
        loop: true,
        navigation: {
            nextEl: ".slide1 .next",
            prevEl: ".slide1 .prev",
        },

        pagination: {
            el: ".slide1 .number", 
            type : 'fraction',
        },

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        }
    });

    $('.sc-slide .btn-play').click(function(e){
        e.preventDefault();

        if( $(this).children('.pause').hasClass('active') ){
            slide1.autoplay.stop();

            $(this).children('.start').addClass('active').siblings().removeClass('active');
        }else{
            slide1.autoplay.start();
            $(this).children('.pause').addClass('active').siblings().removeClass('active');
        }

})








    


    //첫번쨰 슬라이드 부분 02
    var slide2 = new Swiper(".slide2 .swiper", {
        loop: true,
        navigation: {
            nextEl: ".slide2 .next",
            prevEl: ".slide2 .prev",
        },

        pagination: {
            el: ".slide2 .number", 
            type : 'fraction',
        },

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        }
    });
    slide2.autoplay.stop();

    //슬라이드 마우스 호버시 멈춤
    $('.slide-content').hover(function(){
        if(!$(this).find('.start').hasClass('active')){
            slide1.autoplay.stop()
        }
    },function(){
        if(!$(this).find('.start').hasClass('active')){
            slide1.autoplay.start()
        }
    });




//밑에 배너 슬라이드
    var banner = new Swiper(".banner", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 43,

        
        pagination: {
            el: ".pagenumber",
            type: "fraction",
        },

        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    

    $('.sc-banner .btn-play').click(function(e){
        e.preventDefault();

        if( $(this).children('.pause').hasClass('active') ){
            banner.autoplay.stop();

            $(this).children('.start').addClass('active').siblings().removeClass('active');
        }else{
            banner.autoplay.start();
            $(this).children('.pause').addClass('active').siblings().removeClass('active');
        }

})






    //하단 메뉴 목록
    // 메뉴부분 화살표 돌아가는거 각자선택 했을떄 사라지게 하는거 아직 해결못함
    //구글링으로 찾아서 만들긴 했는데 잘 이해가 안감 06/24
    $('.btn-acco').click(function(e){
        e.preventDefault();
        if($(this).hasClass('show')){
            $('.btn-acco').removeClass('show'); 
            $(this).siblings('ul').stop().slideUp();

        } else {
            $('.btn-acco').removeClass('show');

            $(this).addClass('show');
            $('.acco-box').stop().slideUp();

            $(this).siblings('ul').stop().slideDown();
        }
    })


    $('.acco-box li:first-child a').keydown(function(e){
        var keyCode = e.keyCode || e.which;

        if(keyCode == 9 && e.shiftKey ){
            $('.acco-box').stop().slideUp();
        }
    })

    $('.acco-box li:last-child a').keydown(function(e){
        var keyCode = e.keyCode || e.which;

        if(keyCode == 9 && !e.shiftKey ){
            $('.acco-box').stop().slideUp();
        }
    })











    $(".btn-up").hide(); 
    
    //스크롤이 200이상일때 top버튼 보임
    $(window).scroll(function(){
    
        if($(this).scrollTop()>200){
            $(".btn-up").fadeIn();
        }else{
            $(".btn-up").fadeOut();
        }
    });

    // $('.btn-up').hide();
    // // 수정필요  06/15
    // $(window).on('mousewheel',function(e){
    //     var wheel = e.originalEvent.wheelDelta;
    //     // curr = $(window).scrollTop();
    //     //스크롤값을 가져온다.
    //     if(wheel > 0){
    //     //스크롤 올릴때
    //     $(".btn-up").fadeOut();
    //     } else {
    //     //스크롤 내릴때
    //     $(".btn-up").fadeIn();
    //     }
    // });




    // $(window).scroll(function(){
    //     var scrT = $(window).scrollTop();
    //     console.log(scrT);

    //     if (scrT == $(document).height() - $(window).height()) {
    //         $('.btn-up').fadeIn();
    //     } else {
    //         ('.btn-up').hide();
    //     }
    // });






























});//end