let body = $('body').text();


$('body').prepend('<button class="prependButtonClass">Download Content of Page</button>');

$('.prependButtonClass').css('height', '50px')
$('.prependButtonClass').css('width', '100%')
$('.prependButtonClass').css('z-index', '10')
$('.prependButtonClass').css('position', 'absolute')
$('.prependButtonClass').css('top', '0')
$('.prependButtonClass').css('right', '0')

$('.prependButtonClass').on('click', function() {
    window.print(body);
    return false;
})