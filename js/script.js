$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        margin:10,
        nav:true,
        navClass: ['slider__nav--left','slider__nav--right'],
        responsive:{
            0:{
                items:1,
                
            },
            700:{
                items:2,
            
            },
            900:{
                items:3,
            
                
            },
            1200:{
                items:4,
            
                
            }
        }
    })

/*карта*/
var services = $('.services');
var servicesTop = services.offset().top;
$(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > servicesTop) {
        $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9c54cda3bb6ab7db715bfc745fbb95225f3d5eb5266d93a079135f88292e158b&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>')
$(window).unbind('scroll')
    } 


});

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");


$('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено, Мы Вам перезвоним");
        $("form").trigger("reset");
        $(".popup").hide();
    });
    return false;
});

});


  