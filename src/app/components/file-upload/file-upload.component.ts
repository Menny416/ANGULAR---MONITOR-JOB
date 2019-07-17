import { Component, OnInit } from '@angular/core';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(2));
  public demoForm = new FormGroup({
    files: this.filesControl
  });
  constructor() { }

  ngOnInit() {
  }


  public toggleStatus(): void {
    this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }

  public clear(): void {
      this.filesControl.setValue([]);
  }
}
