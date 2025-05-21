import { Component } from '@angular/core';
import { Pagine } from 'src/app/Model/Base/enum';
import { Graphics } from 'src/app/Model/Sito/Grafica';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrl: './news.component.css',
    standalone: false
})
export class NewsComponent {

    news: Graphics[] = [];
  
    constructor(private commonService: CommonService, private sitoService: SitoService)
    {
      this.GetNews();

    }
  

    async GetNews(){
      await (await this.sitoService.GetGraficheByPagina(Pagine.News.valueOf())).subscribe(data => {
        if(data != null && data.Data != null)
          {
            this.news = data.Data.sort((a, b) => (a.order || 0) - (b.order || 0));
          }
          else{
            alert("Errore recupero News");
          } 
        });
      }
}
