function abrirModal() {
    // Obtener los datos de cantidad y precio de los productos
    var cantidad1 = parseInt(document.getElementById('cantidad1').value);
    var cantidad2 = parseInt(document.getElementById('cantidad2').value);
    var cantidad3 = parseInt(document.getElementById('cantidad3').value);
    var cantidad4 = parseInt(document.getElementById('cantidad4').value);
    var cantidad5 = parseInt(document.getElementById('cantidad5').value);
    var cantidad6 = parseInt(document.getElementById('cantidad6').value);


    var precio1 = cantidad1 * 10000;
    var precio2 = cantidad2 * 12000;
    var precio3 = cantidad3 * 12000;
    var precio4 = cantidad4 * 2500;
    var precio5 = cantidad5 * 2500;
    var precio6 = cantidad6 * 3000;


    var total = precio1 + precio2 + precio3 + precio4 + precio5 + precio6;

    // Construir detalle del pedido
    var detallePedido = "";
    if (cantidad1 > 0) {
      detallePedido += `${cantidad1} x Pizza Muzzarella - $${precio1}\n`;
    }
    if (cantidad2 > 0) {
      detallePedido += `${cantidad2} x Pizza Jamón y Queso - $${precio2}\n`;
    }
    if (cantidad3 > 0) {
      detallePedido += `${cantidad3} x Pizza Jamón y Morrones - $${precio3}\n`;
    }
    if (cantidad4 > 0) {
      detallePedido += `${cantidad4} x Empanadas de Carne - $${precio4}\n`;
    }
    if (cantidad5 > 0) {
      detallePedido += `${cantidad5} x Empanadas Jamón y Queso - $${precio5}\n`;
    }
    if (cantidad6 > 0) {
      detallePedido += `${cantidad6} x Coca Cola - $${precio6}\n`;
    }
    // Mostrar el total del pedido en el modal
    document.getElementById('totalPedido').value = total;
    // Mostrar el detalle del pedido en el modal
    document.getElementById('detallePedido').value = detallePedido;

    // Abrir el modal
    document.getElementById('modalPedido').style.display = "block";
  }

  function cerrarModal() {
    document.getElementById('modalPedido').style.display = "none";
  }

  function enviarPedidoWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var calle = document.getElementById('calle').value;
    var numero = document.getElementById('numero').value;
    var entreCalles = document.getElementById('entreCalles').value;
    var detallePedido = document.getElementById('detallePedido').value;
    var totalPedido = document.getElementById('totalPedido').value;

    // Construir mensaje para enviar por WhatsApp
    var mensaje = `Pedido desde la tienda virtual - ${nombre} ${apellido}:\n`;
    mensaje += `Dirección: ${calle} ${numero}, entre ${entreCalles}\n\n`;
    mensaje += `Detalle del pedido:\n${detallePedido}\n`;
    mensaje += `Total: $${totalPedido}`;

    // Número de WhatsApp para enviar el mensaje
    var telefono = '5492944651381';
    var url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url);

    // Cerrar el modal de pedido y abrir el modal de pago después de enviar el mensaje
    cerrarModal();
    mostrarModalPago(totalPedido);
  }

  function mostrarModalPago(total) {
    document.getElementById('totalAPagar').innerText = `Total a pagar: $${total}`;
    document.getElementById('modalPago').style.display = "block";
  }

  function cerrarModalPago() {
    document.getElementById('modalPago').style.display = "none";
  }

  function realizarPago() {
    var totalPedido = document.getElementById('totalPedido').value;
    var url = `https://www.mercadopago.com.ar/settings/account/credentials/production?id=4572718003659482/redirect?pref_id=${totalPedido}`; // Actualiza esta URL con el ID de preferencia de Mercado Pago
    window.open(url);
  }

  // Cerrar los modales si el usuario hace clic fuera de ellos
  window.onclick = function(event) {
    var modalPedido = document.getElementById('modalPedido');
    var modalPago = document.getElementById('modalPago');
    if (event.target == modalPedido) {
      cerrarModal();
    }
    if (event.target == modalPago) {
      cerrarModalPago();
    }
  }