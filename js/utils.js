(function() {
    const close = document.getElementById('close');
    const alert = document.getElementById('alert');

    close.addEventListener('click', function(){
        alert.setAttribute('class', 'hide');
    })
})();