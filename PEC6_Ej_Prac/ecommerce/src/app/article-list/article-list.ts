import { Component, OnInit, inject } from '@angular/core';
import { Article } from '../models/article';
import { ArticleItem } from '../article-item/article-item';
import { CommonModule } from '@angular/common';
import { ArticleQuantityChange } from '../models/article-quantity-change';
import { ArticleService } from '../services/article-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItem, CommonModule],
  template: ` <h1 id="title" class="title">Lista de artículos</h1>
    <div id="list" class="list">
      @for (article of articleList$ | async; track article.id) {
        <app-article-item
          [article]="article"
          (articleQuantityChange)="onChangeQuantity($event)"
        ></app-article-item>
      }
    </div>`,
  styles: `
    .title {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    .list {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: stretch;
      justify-content: center;
      gap: 1rem;
    }
  `,
})
export class ArticleList implements OnInit {
  articleList$: Observable<Article[]> = new Observable();
  private articleService = inject(ArticleService);

  constructor() {}

  ngOnInit(): void {
    this.articleList$ = this.articleService.getArticles();
  }

  onChangeQuantity(articleQuantityChange: ArticleQuantityChange) {
    this.articleService.changeQuantity(
      articleQuantityChange.article.id,
      articleQuantityChange.quantity,
    );
  }
}
