(function() {
    var menu = document.getElementById('mobile-menu'),
        menulink = document.getElementById('menu-burger');
                
    menulink.addEventListener('click', function(e) {
        menu.classList.toggle('active');
        e.preventDefault();
    });
})();