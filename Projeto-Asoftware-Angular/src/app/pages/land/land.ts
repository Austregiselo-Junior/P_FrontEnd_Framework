import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandHeaderComponent } from '../../components/land-header.component/land-header.component';
import { LandBodyComponent } from '../../components/land-body.component/land-body.component';
import { LandFooterComponent } from '../../components/land-footer.component/land-footer.component';

@Component({
  selector: 'app-land',
  imports: [CommonModule, LandHeaderComponent, LandBodyComponent, LandFooterComponent],
  templateUrl: './land.html',
  styleUrl: './land.css',
})
export class Land {

}
