import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = `http://localhost:3000/api/articles/`;

  private httpClient = inject(HttpClient);

  getArticles(query: string): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.apiUrl, { params: { q: query } });
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    return this.httpClient.patch<Article>(this.apiUrl + articleID, {
      changeInQuantity: changeInQuantity,
    });
  }

  create(article: Article): Observable<any> {
    return this.httpClient.post<Article>(this.apiUrl, article);
  }
}
