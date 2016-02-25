import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UsersService {
  public endpoint:string = 'http://tango-api.herokuapp.com';

  constructor(private http: Http) {}

  all() {
    return this.http.get(`${this.endpoint}/users`)
      .map(res => res.json());
  }

  get(id) {
    return this.http.get(`${this.endpoint}/users/${id}`)
      .map(res => res.json());
  }

  create(params) {
    return this.http.post(`${this.endpoint}/users`, JSON.stringify(params))
      .map(res => res.json());
  }

  update(id: Number, params) {
    return this.http.put(`${this.endpoint}/users/${id}`, JSON.stringify(params))
      .map(res => res.json());
  }

  destroy(id: Number) {
    return this.http.delete(`${this.endpoint}/users/${id}`)
      .map(res => res.json());
  }

  signIn(email: string, password: stringng) {
    return this.http.post(
      `${this.endpoint}/users/sign_in`,
      JSON.stringify({
        "user": {
          "email": email,
          "password": password
        }
      })
    ).map(res => res.json());
  }
}
