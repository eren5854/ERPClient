import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {
  @Input() pageName: string = "";
  @Input() routes: string[] = []; //@Input dışarıdan veri almaya yarıyor. sayfaların linkelrini bu sayede alıyoruz.
}
