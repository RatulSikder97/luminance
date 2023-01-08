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
    this.webContext = this.DrawingCanvas.nativeElement.getContext('2d');
    
    this.webContext.fillStyle = "green";
    this.webContext.fillRect(10, 10, 150, 100);
    
  }  

}
