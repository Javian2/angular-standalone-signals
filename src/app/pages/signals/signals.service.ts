import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersInfo } from 'src/app/interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  constructor(private http: HttpClient) {}

  urlBase = 'https://rickandmortyapi.com/api';

  getCharacters(page: number) {
    return this.http.get<CharactersInfo>(
      `${this.urlBase}/character/?page=${page}&count=10`
    );
  }
}
