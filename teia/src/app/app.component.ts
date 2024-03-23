import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerSliderComponent } from "./banner-slider/banner-slider.component";
import { ContainerComponent } from "./container/container.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, BannerSliderComponent, ContainerComponent, PaginationComponent, FooterComponent]
})
export class AppComponent {
  title = 'teia';
}
