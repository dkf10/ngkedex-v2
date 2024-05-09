import { Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { PlotlyDataLayoutConfig } from 'plotly.js-dist-min';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize/capitalize.pipe';

@Component({
  selector: 'ngkdx-pokemon-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnChanges {

  @ViewChild('chartDiv') public chartDivRef: ElementRef;
  @Input() public stats: IPokemon.Stat[];

  public displayChartModel: PlotlyDataLayoutConfig;
  private chartModel: PlotlyDataLayoutConfig;

  constructor(
    private capitalize: CapitalizePipe
  ) {
    this.chartModel = {
      data: [],
      config: {
        staticPlot: true,
        responsive: true,
      },
      layout: {
        autosize: true,
        paper_bgcolor: 'transparent',
        showlegend: false,
        xaxis: {
          ticklen: 5,
          tickcolor: 'rgba(0,0,0,0)'
        },
        yaxis: {
          showticklabels: false,
          range: [0, 250]
        },
        margin: {
          t: 50,
          b: 30,
          l: 50,
          r: 50
        }
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.displayChartModel = null;
    setTimeout(() => {
      this.setLaoyutSize();
    }, 20);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['stats']?.currentValue) {
      this.setupChartData();
    }
  }

  private setupChartData(): void {
    this.chartModel.data = [{
      x: this.stats.map((el) => this.capitalize.transform(el.stat.name)),
      y: this.stats.map((el) => el.base_stat),
      type: 'bar',
      marker: {
        color: 'rgb(233, 24, 24)'
      }
    }];

    setTimeout(() => {
      this.setLaoyutSize();
    }, 100);
  }

  private setLaoyutSize(): void {
    const mockedCartModel = this.chartModel;
    mockedCartModel.layout.height = this.chartDivRef.nativeElement.clientHeight;
    mockedCartModel.layout.width = this.chartDivRef.nativeElement.clientWidth;
    this.displayChartModel = structuredClone(mockedCartModel);
  }
}
