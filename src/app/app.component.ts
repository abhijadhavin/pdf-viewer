import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent  {
  	src = "";  
  	public onFileSelected() {
		let $img: any = document.querySelector('#file');

	  	if (typeof (FileReader) !== 'undefined') {
			let reader = new FileReader();
			reader.onload = (e: any) => { this.src = e.target.result; };
			reader.readAsArrayBuffer($img.files[0]);
	  	}
	} 
	
}
