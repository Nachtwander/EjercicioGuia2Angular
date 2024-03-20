import { Component } from '@angular/core';
import { INoticia } from '../Interfaces/INoticia';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  noticia: INoticia = {
    imagen: {
      src: 'https://picsum.photos/id/237/200/300',
      alt: 'Perrito todo Bonito todo negrito.'
    },
    titulo: 'Hermoso labrador negro',
    enlace: 'https://www.bbc.com/mundo/articles/c51jkl8pgp0o',
    descripcion: 'Enlace lleva a BBc news noticias',
    destacado: false,
    fecha: new Date()
    
  }
    
}
