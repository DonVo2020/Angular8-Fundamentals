import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged } from 'rxjs/operators';

// http://orizens.com/wp/topics/upgrading-to-angular-5-using-httpclient-jsonp-with-parameters/ FOR INFO

@Injectable()
export class WikipediaService {
  constructor(private http: HttpClient) {
  }

  search(keyword: string) {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', keyword);
    search.set('format', 'json');
    const searchParams = 'action=opensearch&format=json&search=' + keyword;
    return this.http.jsonp('http://en.wikipedia.org/w/api.php?' + searchParams,
      'callback')
      .pipe(
        distinctUntilChanged()
      );
  }
}
