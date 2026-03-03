import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Article } from '../models/article';
import { ArticleItem } from '../article-item/article-item';
import { CommonModule } from '@angular/common';
import { ArticleQuantityChange } from '../models/article-quantity-change';
import { ArticleService } from '../services/article-service';
import { Observable, distinctUntilChanged, switchMap, debounceTime, startWith } from 'rxjs';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItem, CommonModule, ReactiveFormsModule],
  template: ` <div class="container">
    <h1 id="title" class="title">Lista de artículos</h1>

    <div class="form-group">
      <input
        type="text"
        placeholder="Busca un artículo por nombre..."
        class="form-control"
        [formControl]="name"
      />
    </div>

    <div id="list" class="list">
      @for (article of articleList$ | async; track article.id) {
        <app-article-item
          [article]="article"
          (articleQuantityChange)="onChangeQuantity($event)"
        ></app-article-item>
      } @empty {
        <p>No se han encontrado artículos.</p>
      }
    </div>
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
    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
    }

    .form-control {
      width: 50%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleList implements OnInit {
  articleList$: Observable<Article[]> = new Observable();
  name: FormControl = new FormControl('');

  private articleService = inject(ArticleService);

  constructor() {}

  ngOnInit(): void {
    this.articleList$ = this.name.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name) => this.articleService.getArticles(name)),
    );
  }

  onChangeQuantity(articleQuantityChange: ArticleQuantityChange) {
    this.articleService.changeQuantity(
      articleQuantityChange.article.id,
      articleQuantityChange.quantity,
    );
  }
}
