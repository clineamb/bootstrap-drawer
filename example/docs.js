(function($) {

    $('#doc-nav').on('click', 'li a', function() {
        console.log($('#drawer-docs').data('page'));
        if($('#drawer-docs').data('page') === $(this).attr('href')) {
            $('#docDrawer').drawer('hide');
            return false;
        }
    });

})(jQuery || {});