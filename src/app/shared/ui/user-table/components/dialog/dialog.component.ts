import { Component, Inject, effect, inject, model } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from '../../../../types/global';
import { UserItem } from '../../../../types/users.type';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
   @Inject(MAT_DIALOG_DATA) public dialogData: any;

  // public formData = new FormGroup({
  //   name: new FormControl(this.dialogData.userData.name),
  // });
  // public userData = {}
  constructor() {
    // effect(() => {
    //   console.log(this.dialogData, 'data');
    // });
  }

  onSubmit(event:any) {
    console.log(event)

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
