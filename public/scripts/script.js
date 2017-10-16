(function () {
    var newButton = document.getElementById('new-button');
    var modelWrapper = document.getElementById('model-wrapper');
    newButton.addEventListener('click', function () {
      modelWrapper.style.display = 'block';
    }, false);

    var closeButton = document.getElementById('close');
    closeButton.addEventListener('click', function () {
      modelWrapper.style.display = 'none';
    }, false);
})();
