import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
	
	private requestOptions;

	constructor(private http: HttpClient) {
		let headers = new Headers();
		this.requestOptions = {headers: headers};

	}

	getUsers(){
		return this.http.get('/users', this.requestOptions);
	}
}