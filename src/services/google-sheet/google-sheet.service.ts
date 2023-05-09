import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  private readonly apiKey = environment.googleSheetsAPIKey;
  private readonly spreadsheetId = environment.googleSheetID;

  constructor(private http: HttpClient) {
    this.apiKey = environment.googleSheetsAPIKey;
    this.spreadsheetId = environment.googleSheetID;
  }

  getData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}?includeGridData=true&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
