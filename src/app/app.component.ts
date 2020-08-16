import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
      // Material Style Basic Audio Player Title and Audio URL
      msbapTitle = 'Limo Bus';
      msbapAudioUrl = 'http://g-slik.com/BEATS/Limo_Bus_INSTRUMENTAL.mp3';   
      msaapDisplayVolumeControls = true;
  
      msbapDisplayTitle = false;   
  title = 'music-player';
}
