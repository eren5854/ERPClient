import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, ControlSidebarComponent, NavbarComponent, MainSidebarComponent, FooterComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
