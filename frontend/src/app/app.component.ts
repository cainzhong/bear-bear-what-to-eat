import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface RecommendationResponse {
  recommendation: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '熊熊今天吃什么';
  readonly recommendation = signal('');
  readonly loading = signal(false);
  readonly errorMessage = signal('');

  constructor(private readonly http: HttpClient) {}

  fetchRecommendation(): void {
    this.errorMessage.set('');
    this.loading.set(true);

    this.http
      .get<RecommendationResponse>('http://localhost:8000/api/recommendation')
      .subscribe({
        next: (response: RecommendationResponse) => {
          this.recommendation.set(response.recommendation);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('暂时无法获取推荐，请稍后再试。');
          this.loading.set(false);
        }
      });
  }
}
