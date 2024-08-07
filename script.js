document.addEventListener("DOMContentLoaded", function() {
    // ------------------Copiar texto al portapapeles.------------------------
    let activeTooltip = null;

    document.querySelectorAll('.toclipboard').forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            const textToCopy = element.getAttribute('data-clipboard-text');
            navigator.clipboard.writeText(textToCopy).then(function() {
                if (activeTooltip) {
                    //console.log('Ocultando tooltip activo');
                    activeTooltip.style.visibility = 'hidden';
                    activeTooltip.style.opacity = '0';
                }
                const tooltip = element.querySelector('.tooltip');
                console.log('Mostrando tooltip');
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
                activeTooltip = tooltip;

                setTimeout(function() {
                    //console.log('Ocultando tooltip después de 2 segundos');
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                    if (activeTooltip === tooltip) {
                        activeTooltip = null;
                    }
                }, 2000); // Ocultar el tooltip después de 2 segundos

            }).catch(function(error) {
                console.error('Error al copiar el texto: ', error);
            });
        });
    });

    // -------------Resaltar los botones de redes sociales.----------------
    document.querySelectorAll('.mouseOverEnable').forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.classList.add('--onMouseOver');
        });

        img.addEventListener('mouseout', function() {
            img.classList.remove('--onMouseOver');
        });
    });
});
