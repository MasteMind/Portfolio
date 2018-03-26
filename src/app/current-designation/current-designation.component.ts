import { Component, OnInit } from '@angular/core';

import { TableData } from '../table-data';

import { PageDataService } from '../page-data.service';

import { Lightbox, IAlbum } from 'angular2-lightbox';

@Component({
  selector: 'app-current-designation',
  templateUrl: './current-designation.component.html',
  styleUrls: ['./current-designation.component.css'],
  providers: [PageDataService]
})
export class CurrentDesignationComponent implements OnInit {
	currentPositionDetails: TableData[];
  _albums: Array<IAlbum> = [];

  	constructor(private pageDataService:PageDataService, private _lightbox: Lightbox) { }

  	getCurrentPositionDetailsData(): void {
  		this.pageDataService.getData().then(data => {
        this.currentPositionDetails = data['currentPosition'];
        for (var i = this.currentPositionDetails[0].samples.length - 1; i >= 0; i--) {
          var detail = this.currentPositionDetails[0].samples[i];
          var album = {
          src: ''+detail,
          caption: 'Image '+i,
          thumb: 'Thumbnail '+i
        }
        this._albums.push(album);
        }
      });
  	}

  	ngOnInit():void {
  		this.getCurrentPositionDetailsData();
  	}

    open(index: number): void {
      this._lightbox.open(this._albums, index);
    }

}
