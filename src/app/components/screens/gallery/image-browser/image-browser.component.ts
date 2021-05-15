import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'app-image-browser',
    templateUrl: './image-browser.component.html',
    styleUrls: ['./image-browser.component.scss']
})
export class ImageBrowserComponent implements OnInit {

    images: Array<any> = new Array(24);
    targetThumbnailWidth: number = 200;
    targetThumbnailHeight: number = 150;

    thumbnailWidth: number = 120;
    thumbnailHeight: number = 100;

    @ViewChild('browserElement') browserElement: ElementRef;
    safe: boolean = false;
    
    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
	this.safe = true;
	this.resizeGallery();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
	if (this.safe) {
	    this.resizeGallery();
	}
    }

    resizeGallery(): void {
	let hack = 1;
	let numRows = Math.floor((this.browserElement.nativeElement.offsetHeight - hack) / this.targetThumbnailHeight);
	let numColumns = Math.floor((this.browserElement.nativeElement.offsetWidth - hack) / this.targetThumbnailWidth);
	this.images = new Array(numRows * numColumns);
	this.thumbnailWidth = this.browserElement.nativeElement.offsetWidth / numColumns - hack;
	this.thumbnailHeight = this.browserElement.nativeElement.offsetHeight / numRows - hack;
	// console.log(`rows: ${numRows}, columns: ${numColumns} ${numRows*numColumns}`);
	// console.log(`row pixels: ${this.browserElement.nativeElement.offsetWidth}, column pixels: ${this.browserElement.nativeElement.offsetHeight}`);
	// console.log(`Target Width: ${this.thumbnailWidth} Target Height: ${this.thumbnailHeight}`);
    }

}
