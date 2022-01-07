$(document).ready(function() {
    $('.nav__burger').click(function(event) {
        $('.nav__list,.nav__burger').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.nav__list a').click(function(event) {
        $('.nav__list,.nav__burger').toggleClass('active');
        $('body').toggleClass('lock');
    })



    $('.tabs_tab1').click(function(event) {
        $('.tabs__slaid').css({'top':'0'});
        $('.tabs_tab1').css({'background': '#ff8b38'});
        $('.tabs_tab2, .tabs_tab3').css({'background': '#333333'});
    })
    $('.tabs_tab2').click(function(event) {
        $('.tabs__slaid').css({'top':'-100%'});
        $('.tabs_tab2').css({'background': '#ff8b38'});
        $('.tabs_tab1, .tabs_tab3').css({'background': '#333333'});
    })
    $('.tabs_tab3').click(function(event) {
        $('.tabs__slaid').css({'top':'-200%'});
        $('.tabs_tab3').css({'background': '#ff8b38'});
        $('.tabs_tab1, .tabs_tab2').css({'background': '#333333'});
    })

})