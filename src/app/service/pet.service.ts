import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Adopt, AdoptList } from '../model/adopt.model';
import { Pet, PetList } from '../model/pet.model';

const baseUrl = 'http://localhost:3000/api/pets'
const adoptionUrl = 'http://localhost:3000/api/adoptions'
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAll(params?:any):Observable<PetList> {
    let options = {}
    if(params) {
      options = {
        params: new HttpParams()
          .set('sort',params.sort || '')
          .set('sortDirection',params.sortDirection || '')
          .set('filter',params.filter && JSON.stringify(params.filter) || '')
      }
    }
    return this.http.get(baseUrl,options).pipe(map((data:any)=> {
      return new PetList(data)
    }))
  }

  getPet(id:number): Observable<Pet> {
    return this.http.get(baseUrl + '/' + id).pipe(map((data:any)=> {
      return new Pet(data)
    }))
  }

  postAdopt(user: Adopt): Observable<Adopt> {
    return this.http.post(adoptionUrl, user).pipe(map((data:any)=> {
      return new Adopt(data)
    }))
  }

  getAdopt(): Observable<AdoptList> {
    return this.http.get(adoptionUrl).pipe(map((data:any)=> {
      return new AdoptList(data)
    }))
  }
  deleteAdopt(id:number): Observable<Adopt> {
    return this.http.delete(adoptionUrl + '/' + id).pipe(map((data:any)=> {
      return new Adopt(data)
    }))
  }
  deletePet(id: number): Observable<Pet> {
    return this.http.delete(baseUrl + "/" + id).pipe(map((data:any)=> {
      return new Pet(data)
    }))
  }
}
