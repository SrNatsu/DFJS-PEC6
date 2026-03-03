import { Component, OnInit, inject } from '@angular/core';
import { Article } from '../models/article';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/article-service';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-new-template.html',
  styleUrl: './article-new-template.css',
})
export class ArticleNewTemplate implements OnInit {
  message: string = '';
  articleService: ArticleService = inject(ArticleService);

  constructor() {}

  ngOnInit(): void {}

  createArticle(form: NgForm) {
    if (form.invalid) {
      this.message = 'Los datos de entrada no son válidos para la creación de un artículo.';
    } else {
      this.message = '';
      const article: Article = form.value.article;
      this.articleService.create(article);
      console.log(article);
    }
  }
}
