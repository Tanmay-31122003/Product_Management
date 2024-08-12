import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
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

  inputChange(event: any) {
    console.log("inputChange called",event.target.value);
    this.text = event.target.value;
  }

  onTyping(event: any) {
    console.log("onTyping called", event);
  }
}
