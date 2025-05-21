import { Component } from '@angular/core';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ExtendedVideo } from 'src/app/Model/Sito/Video';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
  standalone: false
})
export class VideoComponent {

  videos: ExtendedVideo[] = [];

  constructor(private sitoService: SitoService, private commonService: CommonService, private route: ActivatedRoute) {
    this.GetVideo();
    
  }

  async GetVideo(){
    (await this.sitoService.GetVideo()).subscribe(data => {
      if (data != null && data.Data != null) {
        this.videos = data.Data.filter(video => video.active).map(video => {
          let id = this.getParamsFromUrl(video.url);
          return new ExtendedVideo(video.id, video.url, id, video.title, video.description, video.provider, video.active);
        });
      }
      else if (data.Error != null && data.Error.Code == 401) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert(data.Error.Message);
      }
    });
  }

  
  getParamsFromUrl(url: string): any {
    const queryString = url;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get('https://www.youtube.com/watch?v');
    return paramValue;
  }
  
  
  onPlayerReady(event: any) {
    console.log('Player is ready:', event);
  }
  
  onPlayerStateChange(event: any) {
    console.log('Player state changed:', event);
  }
  
}
