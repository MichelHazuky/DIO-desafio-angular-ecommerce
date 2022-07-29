import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./model/Book";

@Injectable()
export class BooksService {
  private planilha: string =
    "https://docs.google.com/spreadsheets/d/1ZhswkqiHrTxJ9RBQbNj5LXvvnyj4bZ9hYKPlGMq7PG4/edit";
  private pagina: string = "Livros";
  private celulas: string = "A1:F";
  private url: string =
    "https://script.google.com/macros/s/AKfycby2TotDu2AZYy-y-YtYWzSzvI9JriDF-y1kzimQw_13Wpz7tHx7P_wZ__XGGwMcI7yyZg/exec";

  httpOptions = {
    Headers: new HttpHeaders({ "content-type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(
      this.url +
        `?link=${this.planilha}&pagina=${this.pagina}&celulas=${this.celulas}`
    );
  }
}
