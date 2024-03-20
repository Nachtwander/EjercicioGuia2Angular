import { Component } from '@angular/core';
import { NoticiaComponent } from '../noticia/noticia.component';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NoticiaComponent],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  conteo: number = 0

  sumarConteo(){
    this.conteo += 1
  }

  restarConteo(){
    this.conteo -= 1
  }
}
