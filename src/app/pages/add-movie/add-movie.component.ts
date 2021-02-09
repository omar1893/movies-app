import { add } from './../../actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  public addMovieForm: FormGroup;
  public base64textString: String;
  public imageName = '';
  public invalidForm: any = {};

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private store: Store<{ movie: Movie[] }>
  ) {
    this.addMovieForm = this.formBuilder.group({
      title: ['', Validators.required],
      release: ['', Validators.required],
      description: '',
      image: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public createMovie(): void {
    console.log(this.addMovieForm.value)
    if (this.addMovieForm.valid) {
      this.store.dispatch(add({ ...this.addMovieForm.value, image: `data:image/jpeg;base64,${this.base64textString}` }))
      this.router.navigate(['home'])
    } else {
      const controls = this.addMovieForm.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.invalidForm[name] = true;
        }
      }
      console.log(this.invalidForm);

    }
  }

  public onImageSelection(e): void {
    var files = e.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      this.imageName = file.name

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(this.base64textString);

    this.addMovieForm.controls.image.setValue(this.base64textString)
    console.log(btoa(binaryString));
  }

}
