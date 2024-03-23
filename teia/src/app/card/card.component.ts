import { Component, Input } from '@angular/core';
import type { Album } from "../../types/album"
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input({ required: true })
  album!: Album;

}
