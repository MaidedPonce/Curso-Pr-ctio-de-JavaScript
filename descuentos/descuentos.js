function calcularPrecioConDescuento(precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;
    return precioConDescuento
}

/**
 *  console.log({
 *  precioOriginal,
 *  descuento,
 *  procentajePrecioConDescuento,
 *  precioConDescuento
 *  })
 */

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount')
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById('ResultP');
    resultP.innerText = `Tu total a pagar es ${precioConDescuento}`;
}


function cupon(precio, nombreCupon) {
    const cupones = [{
            cupon: 'Robi',
            descuento: 25,
        },
        {
            cupon: 'Papita',
            descuento: 50,
        },
        {
            cupon: 'Rabi',
            descuento: 60,
        }
    ]
    const pucharse = cupones.find((item) => item.cupon == nombreCupon);
    if(!pucharse) {
        return null;
    }
    const money = pucharse.descuento;
    const final = calcularPrecioConDescuento(precio, money);
    return final;

}

function aplicarCupon() {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById('InputCupon');
    const valueCupon = inputCupon.value;
    const compraFinal = cupon(priceValue, valueCupon);

    const resultCupon = document.getElementById('ResultCupon');
    resultCupon.innerText = `Tu total a pagar es ${compraFinal}`;
}

/**
 * .color1 {color: #b0c5c3;}
.color2 {color: #cccac3;}
.color3 {color: #3f4d55;}
.color4 {color: #938594;}
.color5 {color: #daddde;}
 */

/**
 * .color1 {color: #000000;}
.color2 {color: #21232c;}
.color3 {color: #515466;}
.color4 {color: #898ca8;}
.color5 {color: #c7cbf1;}
 */