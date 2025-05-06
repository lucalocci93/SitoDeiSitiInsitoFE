import { Component } from '@angular/core';
import { Pagine } from 'src/app/Model/Base/enum';
import { Graphics } from 'src/app/Model/Sito/Grafica';
import { CommonService } from 'src/Services/Common/common.service';
import { SitoService } from 'src/Services/Sito/sito.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

    news: Graphics[] = [];
  
    constructor(private commonService: CommonService, private sitoService: SitoService)
    {
      this.GetNews();

    }
  

    async GetNews(){
      await (await this.sitoService.GetImmaginiByPagina(Pagine.News.valueOf())).subscribe(data => {
        if(data != null && data.Data != null)
          {
            this.news = data.Data;
          }
          else{
            alert("Errore recupero immagini homepage");
          } 
        });
      }
  
}
