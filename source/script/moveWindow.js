document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a caixa
    var box = document.querySelector('.box');
    // Seleciona a barra superior da caixa
    var boxHeader = document.querySelector('.boxheader');

    // Verifica se o elemento foi encontrado
    if (boxHeader) {
        // Variáveis para guardar a posição do mouse durante o movimento
        var offsetX, offsetY;

        // Evento de mouse pressionado na barra superior
        boxHeader.addEventListener('mousedown', function(e) {
            // Calcula a diferença entre a posição do mouse e a posição da caixa
            offsetX = e.clientX - parseFloat(window.getComputedStyle(box).left);
            offsetY = e.clientY - parseFloat(window.getComputedStyle(box).top);

            // Evento de movimento do mouse enquanto mantém pressionado
            window.addEventListener('mousemove', moveBox);
        });

        // Evento de soltar o botão do mouse
        window.addEventListener('mouseup', function() {
            // Remove o evento de movimento do mouse
            window.removeEventListener('mousemove', moveBox);
        });

        // Função para mover a caixa
        function moveBox(e) {
            // Define a nova posição da caixa de acordo com a posição do mouse
            box.style.left = (e.clientX - offsetX) + 'px';
            box.style.top = (e.clientY - offsetY) + 'px';
        }
    }
});
