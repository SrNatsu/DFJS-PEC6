import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './article-item.html',
  styleUrl: './article-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItem implements OnInit {
  @Input({ required: true }) article!: Article;
  @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();

  constructor() {}

  ngOnInit(): void {}

  changeQuantity(value: number): void {
    this.articleQuantityChange.emit({
      article: this.article,
      quantity: value,
    });
  }
}
