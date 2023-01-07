import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements AfterViewInit {
  @ViewChild('drawingCanvas')
  DrawingCanvas!: ElementRef<HTMLCanvasElement>;

  webContext: any;

  ngAfterViewInit(): void {
    this.webContext = this.DrawingCanvas.nativeElement.getContext('webgl');
    
    this.webContext.clearColor(0, 0 ,0 , 1);
    this.webContext.clear(this.webContext.COLOR_BUFFER_BIT);
    
  }  

}
