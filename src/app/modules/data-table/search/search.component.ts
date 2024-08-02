import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  public searchForm = new FormGroup({
    searchText: new FormControl(''),
  });
  onSearchTextChanged() {
    console.log(this.searchForm.value.searchText);
    if (this.searchForm.value.searchText) {
      this.searchTextChanged.emit(this.searchForm.value.searchText);
    }
  }
  onSubmit(): void {
    console.log(this.searchForm.value.searchText);
  }
}
