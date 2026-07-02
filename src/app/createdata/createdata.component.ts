import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef, MatDialogModule,} from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OnInit } from '@angular/core';
import { State } from 'country-state-city';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './createdata.component.html',
  styleUrls: ['./createdata.component.css'],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
})
export class CreatedataComponent implements OnInit {
  editForm: FormGroup;
  indianStates: any[] = [];

   constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreatedataComponent>,
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      State: ['', Validators.required],
      Gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.indianStates = State.getStatesOfCountry('IN');
    console.log(this.indianStates);

       this.editForm = this.fb.group({
      name: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      State: ['', Validators.required],
      Gender: ['', Validators.required],
      });

  }

   save() {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value); // 🔥 SEND TO PARENT
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
