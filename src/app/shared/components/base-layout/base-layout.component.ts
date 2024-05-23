import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasOptions } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../../services/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngkdx-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit, OnDestroy {

  @ViewChild('searchCanvas') public searchCanvas: TemplateRef<any>;
  @Input() public id?: string;

  public searchTerm?: string;
  private searchLayerOpenSubscription: Subscription;

  constructor(
    private canvasService: NgbOffcanvas,
    private searchService: SearchService
  ) { }

  public ngOnInit(): void {
    this.searchLayerOpenSubscription = this.searchService.searchCanvasVisible.subscribe((value) =>
      this.toggleSearchCanvas(value)
    );
  }

  public ngOnDestroy(): void {
    this.searchLayerOpenSubscription.unsubscribe();
  }

  public onSearch(): void {
    if (this.searchTerm.length < 3) {
      return;
    }

    this.searchService.searchTerm = this.searchTerm;
  }

  private toggleSearchCanvas(value: boolean): void {
    if (!value && this.canvasService.hasOpenOffcanvas()) {
      this.canvasService.dismiss();
      return;
    }

    const options: NgbOffcanvasOptions = {
      panelClass: 'search-canvas',
      position: 'end',
      ariaLabelledBy: 'search-canvas-title'
    };

    this.canvasService.open(this.searchCanvas, options);
  }
}
