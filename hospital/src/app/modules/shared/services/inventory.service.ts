import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {


  private apiUrl = 'http://localhost:8080/api/v1/medicine-inventory';

  constructor(private http: HttpClient) {
  }

  createMedicalInventory(holderId: string | null | undefined, name: any, qty: any, unitPrice: any, manufacturedDate: any, expiredDate: any): Observable<any> {
    const url = `${this.apiUrl}/create?holderId=${holderId}`;
    return this.http.post<any>(url, {
      name:name,
      qty:qty,
      unitPrice:unitPrice,
      manufacturedDate:manufacturedDate,
      expiredDate:expiredDate
    });
  }

  getAllInventories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-all`);
  }

  deleteInventory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete`, {params: {id}});
  }

  count(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/count`);
  }

}
