(function($, hljs) {
    var page = window.location.pathname.split("/").pop();

    hljs.initHighlightingOnLoad();

    $('#doc-nav li').each(function() {
        var href = $(this).find('a').attr('href');

        if((page === href) || (page.length <= 0 && href === 'index.html')) {
            $(this).addClass('active');
        }
    });

    $('#doc-nav a').click(function() {
        var href = $(this).attr('href');

        if((page === href) || (page.length <= 0 && href === 'index.html')) {
            $('#docDrawer').drawer('hide');
            return false;
        }
    });

})(jQuery || {}, hljs);