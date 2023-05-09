import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { saveAs } from 'file-saver';

import { FileData } from "../../dtos/fileData.dto";
// import { CONSTANTS } from "../../constants/constants";
import { GoogleSheetService } from "../../services/google-sheet/google-sheet.service";

@Component({
  selector: 'app-list-jsons',
  templateUrl: './list-jsons.component.html',
  styleUrls: ['./list-jsons.component.scss'],
})
export class ListJsonsComponent implements OnInit {
  columnNames: string[];
  jsonFiles: FileData[];

  constructor(
    private http: HttpClient,
    private googleSheetService: GoogleSheetService
  ) {
    this.jsonFiles = [];
    this.columnNames = [];
  }

  ngOnInit() {
    this.getSheetData();
    // this.http.get<FileData[]>(CONSTANTS.filesListUrl).subscribe(data => {
    //   this.jsonFiles = data;
    // });
  }

  async downloadFile(fileUrl: string, fileName: string) {
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe(blob => {
      saveAs(blob, fileName);
    });

    // const response = await fetch(fileUrl);
    // const blob = await response.blob();
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = fileName;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // window.URL.revokeObjectURL(url);
  }

  private getSheetData() {
    const observer = this.googleSheetService.getData();
    observer.subscribe((data: any) => {
      const rowData = this.getRowData(data);
      this.columnNames = this.getColumns(rowData);
      this.jsonFiles = this.getRows(rowData);
    });
  }

  private getRowData(data: any) {
    return data['sheets'][0]['data'][0]['rowData'];
  }

  private getColumns(rowData: any) {
    const firstRowValues = rowData[0]['values']
    let headers: string[] = [];
    firstRowValues.forEach((value: { [x: string]: any; }) => {
      headers.push(value['formattedValue'])
    })
    return headers;
  }

  private getRows(rowData: any) {
    const rows: FileData[] = [];
    for (let i = 1; i < rowData.length; i++){
      const rowValues = rowData[i]['values'];
      const row: FileData = {
        name: rowValues[0]['formattedValue'],
        fileName: rowValues[1]['formattedValue'],
        description: rowValues[2]['formattedValue'],
        paymentGroup: rowValues[3]['formattedValue'],
        url: rowValues[4]['formattedValue'],
      }
      rows.push(row);
    }
    return rows;
  }
}
