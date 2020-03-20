import { catchError, map } from 'rxjs/operators';
import { throwError, of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// Namespace for catch operatoren
// import { BadInput } from '@common/models/bad-input';
// import { NotFoundError } from '@common/models/not-found-error';
// import { AppError } from '@common/models/app-error';
// import { PaginationResult } from '@main/models/pagination';

// Store
// import { Store } from '@ngrx/store';
// import { State } from '@main/store/reducers';
// import { NotificationTypes } from '@main/models/enums/notification.types';
// import { FireNotification } from '@main/store/actions/notification.action';

@Injectable()
export class DataService<TRequest, TResponse> {
  protected url = environment.apiUrl;
  constructor(
    protected http: HttpClient,
    // protected mainStore: Store<State>
  ) { }

  // return observable
  post(resource: TRequest): Observable<TResponse> {
    return this.http.post<TResponse>(this.url, resource)
      .pipe(catchError(err => of(err)));
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id)
        // .pipe(catchError(this.handleError));
  }

  update(resource: TRequest): Observable<TResponse> {
    return this.http.patch<TResponse>(this.url, resource)
      // .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<TResponse> {
    return this.http.get<TResponse>(`${this.url}/${id}`);
  }

  get(id: number) {
    return this.http.get<TResponse>(`${this.url}/${id}`);
        // .pipe(catchError(this.handleError));
  }

  getAll() {
    return this.http.get<TResponse[]>(`${this.url}`);
        // .pipe(catchError(this.handleError));
  }

  getAllPaginated(page?, pageSize?, token?) {
    // const paginatedResult: PaginationResult<TResponse[]> = new PaginationResult<TResponse[]>();

    let params = this.createHttpParams(page, pageSize);

    if (token) {
      params = params.append('Authorization', 'Bearer ' + token);
    }

    // return this.http.get<TResponse[]>(this.url, { observe: 'response', params})
    //   .pipe(
    //     map(response => {
    //       paginatedResult.result = response.body;
    //       if (response.headers.get('Pagination') != null) {
    //         paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
    //       }
    //       return paginatedResult;
    //     })
    //   );
  }

  getCountOfAll() {
    return this.http.get(this.url + '/count');
      // .pipe(catchError(this.handleError));
  }

  search(searchTerm: string, page?, pageSize?) {
    // const paginatedResult = new PaginationResult<TResponse[]>();

    // const params = this.createHttpParams(page, pageSize);

    // const request = {
    //   searchTerm: searchTerm
    // };

    // return this.http.post(`${this.url}/search`, request, { observe: 'response', params })
    //   .pipe(
    //     map((response: any) => {
    //       paginatedResult.result = response.body;
    //       if (response.headers.get('Pagination') != null) {
    //         paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
    //       }
    //       return paginatedResult;
    //     })
    //   );
  }

  getDetailedView(id: number) {
    return this.http.get(`${this.url}/${id}/view`);
  }

  private handleError(error: Response) {
    // this.mainStore.dispatch(FireNotification({
    //   payload: {
    //     message: 'Fehler',
    //     notificationType: NotificationTypes.Error
    //   }
    // }));

    if (error.status === 400) {
      // return throwError(new BadInput(error.json()));
    }

    if (error.status === 404) {
      // return throwError(new NotFoundError());
    }
    // return throwError(new AppError(error));
  }

  createHttpParams(page?, pageSize?): HttpParams {
    let result = new HttpParams();

    if (page != null && pageSize != null) {
      result = result.append('PageNumber', page);
      result = result.append('PageSize', pageSize);
    }

    return result;
  }
}
