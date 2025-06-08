import { Component, ViewChild } from '@angular/core';
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

  videoHeight: number | undefined;
  videoWidth: number | undefined;


  constructor(private sitoService: SitoService, private commonService: CommonService, private route: ActivatedRoute) {
    this.GetVideo();
    this.videoWidth = document.documentElement.scrollWidth / 1.5; // Set video width to half of the screen width
    this.videoHeight = this.videoWidth * 0.6; // Maintain aspect ratio

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
    if (event.data === YT.PlayerState.PLAYING) {
      event.target.height = 20;
      event.target.width = 20;

    }
    else if (event.data === YT.PlayerState.PAUSED) {
    }
    else if (event.data === YT.PlayerState.ENDED) {
    }

    console.log('Player state changed:', event);
  }

  
}
