import { Component } from '@angular/core';
import { Config } from 'ngx-form-lib';
import {
  MatSnackBar
} from '@angular/material/snack-bar';

import { ObjectMapperService } from '../../../../shared/services/object-mapper.service';

@Component({
  selector: 'app-configuration-viewer',
  templateUrl: './configuration-viewer.component.html',
  styleUrls: ['./configuration-viewer.component.scss'],
})
export class ConfigurationViewerComponent {
  config$ = this.mapperService.masterConfig$;

  constructor(private readonly mapperService: ObjectMapperService, private readonly snackBar: MatSnackBar) { }

  downloadFile(data: Config | null): void {
    const downloadLink = window.document.createElement('a');

    downloadLink.href = window.URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/txt' }));
    downloadLink.download = "ngx-form-lib-configuration.txt";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  copyToClipboard(element: any): void {
    element.select();
    document.execCommand('copy');
    element.setSelectionRange(0, 0);
    this.openSnackBar();
  }

  stringifyData(config: Config | null): string {
    return JSON.stringify(config, null, 2);
  }

  openSnackBar() {
    this.snackBar.open('Copied to Clipboard', 'Okay', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
