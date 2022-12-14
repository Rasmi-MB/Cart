import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class CartService {
    constructor(private http: HttpClient) { }

    addItems(request: any){
        return this.http.post<any>(`/api/getTotal`,request)
      }
}