import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../models/article';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NameArticleValidator } from '../validators/name-article-validator';
import { ArticleService } from '../services/article-service';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-new-reactive.html',
  styleUrl: './article-new-reactive.css',
})
export class ArticleNewReactive implements OnInit {
  form!: FormGroup;
  message: string = '';
  submitted: boolean = false;
  articleService: ArticleService = inject(ArticleService);

  private urlPattern =
    /^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}\/[a-zA-Z0-9\-\.]+(\.[a-zA-Z]{2,4})$/i;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator.nameArticleValidator]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.urlPattern)]],
      isOnSale: [false],
    });
  }

  createArticle() {
    this.submitted = true;

    if (this.form.invalid) {
      this.message = 'Los datos de entrada no son válidos para la creación de un artículo.';
      return;
    } else {
      this.message = '';
      const article: Article = this.form.value;
      this.articleService.create(article);
      console.log(article);
    }
  }
}
