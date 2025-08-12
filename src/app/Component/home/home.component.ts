import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/Services/Common/common.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SitoService } from 'src/Services/Sito/sito.service';
import { Pagine } from 'src/app/Model/Base/enum';
import { Graphics } from 'src/app/Model/Sito/Grafica';
import { SSEService } from 'src/Services/Sito/SSE.service';
import { Notification } from 'src/app/Interface/Notification';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {

  images: Graphics[] = [];

  slides_1: Graphics[] = [];
  slides_2: Graphics[] = [];
  slides_3: Graphics[] = [];

  whowheare: Graphics[] = [];
  features: Graphics[] = [];
  plans: Graphics[] = [];

  HomeNotification: Notification[] = [];
  @ViewChild(AppComponent) notifier!: AppComponent;

  constructor(private commonService: CommonService, private sitoService: SitoService)
  {
    this.GetHomepageImages();
    this.startAutoPlay()
    this.GetHomeNotification();
  }

  currentSlide1 = 0;
  currentSlide2 = 0;
  currentSlide3 = 0;

  autoPlayInterval: any;


   //[
   // {
   //   image: this.commonService.getUrlForGoogleDrive('https://drive.google.com/file/d/1uRx8iJu6Wck9Xj2SnlgMmsJkqPUpAM5O/view?usp=drive_link'),
   //   title: 'Transform Your Body',
   //   description: 'Start your fitness journey today with our expert trainers',
   //   buttonText: 'Start Now'
   // }
   // ,{
   //   image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
   //   title: 'Expert Trainers',
   //   description: 'Get personalized workout plans tailored to your goals',
   //   buttonText: 'Meet Our Trainers'
   // },
   // {
   //   image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
   //   title: 'Modern Equipment',
   //   description: 'Train with state-of-the-art facilities and equipment',
   //   buttonText: 'View Gym'
   // },
   // {
   //   image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c',
   //   title: 'Group Classes',
   //   description: 'Join our energetic group workouts and make new friends',
   //   buttonText: 'View Schedule'
   // }
   //];

  //features = [
  //  {
  //    icon: '💪',
  //    title: 'Personal Training',
  //    description: 'One-on-one sessions with certified trainers customized to your needs'
  //  },
  //  {
  //    icon: '🕒',
  //    title: '24/7 Access',
  //    description: 'Work out on your schedule with round-the-clock facility access'
  //  },
  //  {
  //    icon: '👥',
  //    title: 'Group Classes',
  //    description: 'Join our energetic group workouts with expert instructors'
  //  },
  //  {
  //    icon: '🥗',
  //    title: 'Nutrition Plans',
  //    description: 'Custom meal plans designed to help you reach your fitness goals'
  //  }
  //];

  //plans = [
  //  {
  //    title: 'Basic',
  //    price: '$29/month',
  //    features: [
  //      'Access to gym facilities',
  //      'Basic equipment usage',
  //      'Locker room access',
  //      '2 group classes/month'
  //    ]
  //  },
  //  {
  //    title: 'Premium',
  //    price: '$59/month',
  //    features: [
  //      'Full gym access 24/7',
  //      'All equipment access',
  //      'Unlimited group classes',
  //      'One personal training session/month'
  //    ]
  //  },
  //  {
  //    title: 'Elite',
  //    price: '$99/month',
  //    features: [
  //      'All Premium features',
  //      'Weekly personal training',
  //      'Custom nutrition plan',
  //      'Spa access'
  //    ]
  //  }
  //];

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide1();
      this.nextSlide2();
      this.nextSlide3();

    }, 7000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide1() {
    this.currentSlide1 = (this.currentSlide1 + 1) % this.slides_1.length;
  }
  nextSlide2() {
    this.currentSlide2 = (this.currentSlide2 + 1) % this.slides_2.length;
  }
  nextSlide3() {
    this.currentSlide3 = (this.currentSlide3 + 1) % this.slides_3.length;
  }


  // prevSlide() {
  //   this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  // }

  // goToSlide(index: number) {
  //   this.currentSlide = index;
  //   this.stopAutoPlay();
  //   this.startAutoPlay();
  // }

  GoToSection(sectionName : string){
    const section = document.getElementById(sectionName);
    section?.scrollIntoView({behavior: 'smooth'});
  }

  BacktoMain(){
    const main = document.getElementById('buttons');
    main?.scrollIntoView({behavior: 'smooth'});

  }

  async GetHomepageImages(){
    this.sitoService.GetGraficheByPagina(Pagine.Homepage.valueOf()).subscribe(data => {
      if(data != null && data.Data != null)
        {
          data.Data.forEach((item: Graphics) => {
            item.urlImage = item.urlFromGoogleDrive ? this.commonService.getUrlForGoogleDrive(item.urlImage) : item.urlImage;
            this.images.push(item);
          });

            //inizializzo immagini nelle varie sezioni
            this.slides_1 = this.images.filter(f => f.section == 1 && f.active).sort((a, b) => (a.order || 0) - (b.order || 0));
            this.whowheare = this.images.filter(f => f.section == 2 && f.active).sort((a, b) => (a.order || 0) - (b.order || 0));
            this.slides_2 = this.images.filter(f => f.section == 3 && f.active).sort((a, b) => (a.order || 0) - (b.order || 0));
            this.features = this.images.filter(f => f.section == 4 && f.active).sort((a, b) => (a.order || 0) - (b.order || 0));
            this.slides_3 = this.images.filter(f => f.section == 5 && f.active).sort((a, b) => (a.order || 0) - (b.order || 0));
            this.plans = this.images.filter(f => f.section == 6 && f.active).sort((a, b) => (a.order || 0) - (b.order || 0));

        }
        else{
          alert("Errore recupero immagini homepage");
        } 
      });
    }


  GetHomeNotification() {
    this.sitoService.GetNotificationByPage(Pagine.Homepage.valueOf()).subscribe(data => {
      if(data != null && data.Data != null)
        {
          data.Data.forEach((item: Notification) => {
            this.HomeNotification.push(item);
          });
        }
        else{
          alert("Errore recupero immagini homepage");
        } 
      });
  }
}
