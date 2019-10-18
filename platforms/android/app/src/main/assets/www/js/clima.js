$(document).ready(function () {
	var f = new Date();
	var fecha = f.getDate() + '/' + (f.getMonth() + 1) + '/' + f.getFullYear();
	
	$('#fecha').text(fecha);
	estadoTiempo();
});

function estadoTiempo() {
	$.ajax('http://meteorologia.sanfrancisco.utn.edu.ar/api.php', {
		method: 'POST',
		dataType: 'json',
		success: function (datos) {
			var temperatura = datos.temperatura;
			$('#temperatura').text(temperatura);

			var sensacion_termica = datos.sensacion_termica;
			$('#sensacion_termica').text('(ST: ' + sensacion_termica + ')');

			var humedad = datos.humedad;
			$('#humedad').text(humedad);

			var viento = datos.direccion_viento + ' a ' + datos.velocidad_viento;
			$('#viento').text(viento);

			var presion = datos.presion;
			$('#presion').text(presion);

			var salida = datos.salida;
			$('#salida').text(salida);

			var puesta = datos.puesta;
			$('#puesta').text(puesta);
		}
	});
}