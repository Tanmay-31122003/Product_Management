import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'] // Corrected from styleUrl to styleUrls
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  text = "";

  onSearch() {
    console.log("Search clicked, text:", this.text);
    this.search.emit(this.text);
  }
}
