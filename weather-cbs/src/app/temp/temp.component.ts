/*Import Input from Angular core*/
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
/*using Input class, Imported the objects from parent component*/
  @Input('resultdata') public resultdata: object;
  @Input('hourlydata') public hourlydata: object;
}

