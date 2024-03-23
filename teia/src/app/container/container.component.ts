import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Album } from '../../types/album';

@Component({
  selector: 'app-container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  imports: [CardComponent, CommonModule],
})
export class ContainerComponent implements OnInit {
  data!: [Album] | [];
  content!: Album[] | [];
  photosPerPage = 24;
  query!: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: ApiService
  ) {
    this.api = new ApiService();
  }

  async ngOnInit() {
    this.data = await this.api.apiRequest('/');

    this.route.queryParams.subscribe((_) => {
      this.query = this.route.snapshot.queryParams; // Usa o snapshot para evitar subscrições adicionais
      let page = Number(this.query['page']) || 1;
      if (this.data) {
        this.content = this.data.slice(
          (page - 1) * this.photosPerPage,
          page * this.photosPerPage
        );
      }
    });
  }
}
