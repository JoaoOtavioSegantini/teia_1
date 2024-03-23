import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from '../pagination.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {


  @Input()
  page: number = 1

  @Input()
  total_pages: number = 209 // 5000 dividido por 24 itens por página

  service = new PaginationService()

  pagination: any


  constructor(private readonly route: Router) { }

  ngOnInit(): void {
    this.pagination = this.service.execute(this.total_pages!, this.page!)

  }

  // método utilizado para tratar a seleção das páginas
  handlePageClick = (page: string): void => {
    if (page === "...") {
      return
    }

    this.pagination = this.service.execute(this.total_pages, Number(page))

    this.page = Number(page)
    this.route.navigate([`/home`], {
      queryParams: {
        page: page
      },
      queryParamsHandling: 'merge',
    });

  }


  // método para tratar a seleção da página posterior a atual
  handleNextPageClick = (): void => {
    if (this.page! < this.total_pages!) {
     this.page++
      this.pagination = this.service.execute(this.total_pages, Number(this.page))
      this.route.navigate([`/home`], {
        queryParams: {
          page: this.page
        },
        queryParamsHandling: 'merge',
      });
    }

  }

  // método para tratar a seleção da página anterior a atual
  handlePreviusPageClick = (): void => {
    if (this.page! > 1) {
      this.page--
      this.pagination = this.service.execute(this.total_pages, Number(this.page))
      this.route.navigate([`/home`], {
        queryParams: {
          page: this.page
        },
        queryParamsHandling: 'merge',
      });

    }

  }

}
