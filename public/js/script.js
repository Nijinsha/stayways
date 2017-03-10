(function() {

    $('#tohash').on('click', function() {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
        return false;
    });

      $('#signup')
            .modal('hide');

        $('#sign').click(function() {
            $('#signup')
                .modal({
                    blurring: true
                })
                .modal('show')
                .modal({
                    backdrop: 'static',
                    keyboard: false
                });
        });




        $('#login')
            .modal('hide');

        $('#log').click(function() {
            $('#login')
                .modal({
                    blurring: true
                })
                .modal('show')
                .modal({
                    backdrop: 'static',
                    keyboard: false
                });
        });




        $('.special.cards .image').dimmer({
            on: 'hover'
        });
        
})(jQuery)