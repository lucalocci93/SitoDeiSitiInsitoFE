import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ModaleComponent } from 'src/app/Component/modale/modale.component';
import { ModalData } from 'src/app/Interface/modal-data';
import { Video } from 'src/app/Model/Sito/Video';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';

@Component({
  selector: 'app-gestione-video',
  templateUrl: './gestione-video.component.html',
  styleUrl: './gestione-video.component.css',
  standalone: false
})
export class GestioneVideoComponent {

  video: Video[] = [];

  searchText = '';

  SelectedSize = 5;
  CurrentPage = 1;

  currentPage = 1;
  itemsPerPage = 5;
  pageSizes = [5, 10, 15, 20];

  displayedColumns: string[] = ['Url', 'Titolo', 'Descrizione', 'Attivo', 'Azioni'];

  constructor(private commonService: CommonService, private sitoService: SitoService, public dialog: MatDialog)
  {
    this.GetVideo();
    
  }

  async GetVideo(){
    this.sitoService.GetVideo().subscribe(data => {
      if (data != null && data.Data != null) {
        this.video = data.Data;
      }
      else if (data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized) {
        alert("La tua sessione è scaduta, rieffettua il login");
        window.location.href = '/login';
      }
      else {
        alert(data.Error.Message);
      }
    });
}

    get filteredData() {
      let searchValue = this.searchText.toLowerCase();
      let data : Video[] = [];

      if(searchValue != "")
        {
          data = this.video.filter(item => 
            item.url.toLowerCase().includes(searchValue) ||
            item.title.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
          );  
      }
      else
      {
        data = this.video;
      }

      const startIndex = (this.CurrentPage - 1) * this.SelectedSize;
      const endIndex = Math.min(startIndex + this.SelectedSize - 1, this.video.length - 1);

      const items = data.slice(startIndex, endIndex + 1);

      return items;

    }

    PageChange(event: PageEvent) {
      this.SelectedSize = event.pageSize;
      this.CurrentPage = event.pageIndex + 1;
    } 
    
    openModal(type: string, redirection: Video | null): void {
      const dialogRef = this.dialog.open(ModaleComponent, {
        data: { type, object: redirection } as ModalData<Video>
      });
    }

    AddVideo(){
      this.openModal("AddVideo", null);
    }

    async AbilitaDisabilitaVideo(video: Video, toggle: boolean){

      let redirection = new Video(video.id, video.url, video.title, video.description, video.provider, toggle);
      this.sitoService.ToggleVideo(redirection).subscribe(data => {
        if(data != null && data.Data != null){
          window.location.reload();
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore attivazione/disabilitazione redirezione");
        }
      });  
    }

    async CancellaVideo(redirezione: Video){
      this.sitoService.RemoveVideo(redirezione).subscribe(data => {
        if(data != null && data.Data != null){
          window.location.reload();
        }
        else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        }
        else{
          alert("Errore cancellazione redirezione");
        }
      });  
    }
}
