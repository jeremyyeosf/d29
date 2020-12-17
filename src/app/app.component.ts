import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control(''),
      isbn: this.fb.control('')
    })
  }

  process() {
    console.log(this.form.value)
    const value = this.form.value
    let params = new HttpParams()
    params = params.set('title', value['title'])
    params = params.set('isbn', value['isbn'])
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')

    this.http.post<any>('http://localhost:3000/book',
      params, { headers })
      .toPromise()
      .then(response => {
        console.log('response: ', response)
      })
      .catch(err => {
        console.error('ERROR: ', err)
      })

  }


}
