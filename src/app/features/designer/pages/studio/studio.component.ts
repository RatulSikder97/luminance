import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Konva from '../../../../../assets/konva.min.js';

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
    this.webContext = new Konva.Stage({
      container: 'container',   // id of container <div>
      width: 500,
      height: 500
    });;
    
    let layer = new Konva.Layer();

    // create our shape
    let circle = new Konva.Circle({
      x: this.webContext.width() / 2,
      y: this.webContext.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4
    });

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    this.webContext.add(layer);

    // draw the image
    layer.draw();

  }

}
