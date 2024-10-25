import { series } from './series.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
cambiarCard(series[0]);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.index, "</td>\n                             <td><a class=\"serie\" href=\"#\">").concat(serie.name, "</a></td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var serieLink = trElement.querySelector('.serie');
        if (serieLink) {
            serieLink.addEventListener('click', function (event) {
                event.preventDefault();
                cambiarCard(serie);
            });
        }
        seriesTbody.appendChild(trElement);
    });
}
function seasonsAverage(series) {
    var suma = 0;
    var cantidad = 0;
    series.forEach(function (serie) {
        suma += serie.seasons;
        cantidad += 1;
    });
    var resultado = Math.round(suma / cantidad);
    return "Seasons average: " + resultado;
}
document.addEventListener("DOMContentLoaded", function () {
    var elemento = document.getElementById("average");
    if (elemento) {
        elemento.innerText = seasonsAverage(series);
    }
});
function cambiarCard(serie) {
    var imagen = document.getElementById("imagen");
    var descripcion = document.getElementById("descripcion");
    var link = document.getElementById("link");
    var titulo = document.getElementById("titulo");
    imagen.src = serie.image;
    descripcion.innerText = serie.description;
    link.href = serie.link;
    link.innerText = serie.link;
    titulo.innerText = serie.name;
}
