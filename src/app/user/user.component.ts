import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { CreatedataComponent } from '../createdata/createdata.component';


export interface UserData {
  position: number;
  name: string;
  PhoneNumber: number;
  State: string;
  Gender: string;
}

const ELEMENT_DATA: UserData[] = [
  { position: 1, name: 'Abishek', PhoneNumber: 9042804376, State: 'Tamilnadu', Gender: 'Male' },
  { position: 2, name: 'Abishek', PhoneNumber: 9042804377, State: 'Karnataka', Gender: 'Male' },
  { position: 3, name: 'Loki', PhoneNumber: 8270392010, State: 'Assam', Gender: 'Male' },
  { position: 4, name: 'karim', PhoneNumber: 7639813490, State: 'Maharastra', Gender: 'Male' },
  { position: 5, name: 'Shamiy', PhoneNumber: 1234567890, State: 'Gujarat', Gender: 'Female' },
  { position: 6, name: 'Dhie', PhoneNumber: 9874561231, State: 'Kashmir', Gender: 'Female' },
  { position: 7, name: 'Vivek', PhoneNumber: 2541637898, State: 'Karnataka', Gender: 'Male' },
  { position: 8, name: 'Gyuki', PhoneNumber: 2589631470, State: 'Haryana', Gender: 'Female' },
  { position: 9, name: 'Anushka', PhoneNumber: 3652147890, State: 'Kerala', Gender: 'Female' },
  { position: 10, name: 'Sharma', PhoneNumber: 6547893210, State: 'Telugana', Gender: 'Male' },
  { position: 11, name: 'gayu', PhoneNumber: 9874560231, State: 'bunjab', Gender: 'Female' },
  { position: 12, name: 'hanshika', PhoneNumber: 2581637898, State: 'Bihar', Gender: 'Female' },
  { position: 13, name: 'hanshi', PhoneNumber: 2589231470, State: 'Haryana', Gender: 'Female' },
  { position: 14, name: 'Anushka', PhoneNumber: 3682147890, State: 'Kerala', Gender: 'Female' },
  { position: 15, name: 'Sharmi', PhoneNumber: 6567893210, State: 'Telugana', Gender: 'Female' },
  { position: 16, name: 'Dheepika', PhoneNumber: 9674561231, State: 'Delhi', Gender: 'Female' },
  { position: 17, name: 'Raj', PhoneNumber: 2541237598, State: 'Hydrabad', Gender: 'Male' },
  { position: 18, name: 'Gyan', PhoneNumber: 2589631440, State: 'Odisha', Gender: 'Male' },
  { position: 19, name: 'Abdhul', PhoneNumber: 3652144890, State: 'Haryana', Gender: 'Male' },
  { position: 20, name: 'Deepan', PhoneNumber: 6545893210, State: 'Maharastra', Gender: 'Male' },
];

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'position',
    'name',
    'PhoneNumber',
    'State',
    'Gender',
    'action'
  ];

  dataSource!: MatTableDataSource<UserData>;
  dataToDisplay: UserData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataToDisplay = [...ELEMENT_DATA];
    this.dataSource = new MatTableDataSource(this.dataToDisplay);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  createData(): void {
    const dialogRef = this.dialog.open(CreatedataComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCreatedData(result);
      }
    });
  }

  addCreatedData(newData: UserData): void {
    newData.position = this.dataToDisplay.length + 1;
    this.dataToDisplay = [...this.dataToDisplay, newData];
    this.dataSource.data = this.dataToDisplay;
  }
//edit
  editRow(data: UserData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        Object.assign(data, result);
        this.dataSource.data = [...this.dataToDisplay];
      }
    });
  }

//delete
  deleteRow(element: UserData): void {
    this.dataToDisplay = this.dataToDisplay.filter(e => e !== element);
    this.dataToDisplay.forEach((e, i) => e.position = i + 1);
    this.dataSource.data = this.dataToDisplay;
  }
//fillter
  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
