import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from "@angular/forms";
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  selectable2 = true;
  removable2 = true;
  addOnBlur2 = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  prefForm: FormGroup;
  authors: string[] = ["Rabindranath Tagore","RP Feynman"];
  genres: string[] = ["Sci-fi","Historical Fiction"];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.authors.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }


  remove(author: string): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

  addGen(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.genres.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }


  removeGen(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
    }
  }
}
