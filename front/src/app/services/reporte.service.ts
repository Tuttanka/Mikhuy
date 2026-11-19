import { API_URL } from '../api';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReporteMarca } from '../models/reporte';

@Injectable({ providedIn: 'root' })
export class ReporteService {
  private http = inject(HttpClient);
  private url = `${API_URL}/api/reportes`;

  obtenerReporte(): Observable<ReporteMarca[]> {
    return this.http.get<ReporteMarca[]>(`${this.url}/reservas`);
  }
}