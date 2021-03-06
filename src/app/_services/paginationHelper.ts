import { PaginationSource } from './../models/pagination';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginatedResult } from '../models/pagination';

export function getPaginatedResult<T>(url: string, params: any, http: HttpClient): Observable<PaginatedResult<T>> {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return http.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body!;
        if (response.headers.get('Pagination') !== null) {
          paginatedResult.Pagination = JSON.parse(response.headers.get('Pagination')!) as PaginationSource;
        }
        return paginatedResult;
      })
    );
  }

  // export function getPaginationHeaders(pageNumber: number, pageSize: number) {
  //   let params = new HttpParams();

  //   params = params.append('pageNumber', pageNumber.toString());
  //   params = params.append('pageSize', pageSize.toString());

  //   return params;
  // }
