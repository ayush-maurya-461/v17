import { Component } from '@angular/core';
import { SignalsComponent } from './components/signals/signals.component';
import { NgIf } from '@angular/common';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { LocalizeComponent } from './components/localize/localize.component';
import { NgxPrintExampleComponent } from './components/ngx-print-example/ngx-print-example.component';
import { TrackByComponent } from './components/track-by/track-by.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxPrintExampleComponent,
    SignalsComponent,
    NgIf,
    LocalizeComponent,
    RxjsComponent,
    TrackByComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'v17';
  protected activeModule = 'trackby';

  setModule(module:string){
    this.activeModule = module
  }
}
