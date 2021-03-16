import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Nanny } from './nanny.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NannyService {
  
  constructor(private http: HttpClient) {}
public getNannyById(nannyId: string): Observable<any> {
  return this.http.get('/api/v1/nannies/' + nannyId)
}

  public getNanny(): Observable<any> {
   return this.http.get('/api/v1/nannies')
}

public getNannyByCity(city: string): Observable<any> {
  return this.http.get(`/api/v1/nannies?city=${city}`);
}
}