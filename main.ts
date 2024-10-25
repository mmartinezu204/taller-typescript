import { Serie } from './serie.js';

import { series } from './series.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(series);
cambiarCard(series[0]);

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.index}</td>
                             <td><a class="serie" href="#">${serie.name}</a></td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    const serieLink = trElement.querySelector('.serie');
    if (serieLink) {
      serieLink.addEventListener('click', (event) => {
        event.preventDefault();
        cambiarCard(serie);
      });
    }
    seriesTbody.appendChild(trElement);
  });
  }

function seasonsAverage(series: Serie[]): string {
  let suma: number = 0;
  let cantidad: number = 0; 
  series.forEach((serie) => {
    suma += serie.seasons;
    cantidad += 1;
  });
  let resultado = Math.round(suma/cantidad);
  return "Seasons average: " + resultado;
}

document.addEventListener("DOMContentLoaded", () => {
  const elemento = document.getElementById("average")!;
  if (elemento) {
    elemento.innerText = seasonsAverage(series);
  }
});

function cambiarCard(serie: Serie): void {
  const imagen = document.getElementById("imagen") as HTMLImageElement;
  const descripcion = document.getElementById("descripcion") as HTMLParagraphElement;
  const link = document.getElementById("link") as HTMLAnchorElement;
  const titulo = document.getElementById("titulo") as HTMLHeadingElement;
  imagen.src = serie.image;
  descripcion.innerText = serie.description;
  link.href = serie.link;
  link.innerText = serie.link;
  titulo.innerText = serie.name;
}