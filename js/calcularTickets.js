const categoria = document.querySelector('#categoria');
const cantidad = document.querySelector('#cantidad');
const btnResumen = document.querySelector('#btn-resumen');
const btnBorrar = document.querySelector('#btn-borrar');
const totalAPagar = document.querySelector('#total');
const precio = 200;
let descuento;

btnResumen.addEventListener('click', e => {
    e.preventDefault();

    switch (categoria.value) {
        case 'estudiante':
            descuento = .20; 
            break;
        case 'trainee':
            descuento = .50; 
            break;
        case 'junior':
            descuento = .85; 
            break;
        default:
            break;
    };

    totalAPagar.textContent = cantidad.value * precio * descuento;
    totalAPagar.parentElement.classList.remove('d-none');
});

btnBorrar.addEventListener('click', () => {
    totalAPagar.textContent = null;
    totalAPagar.parentElement.classList.add('d-none');
});