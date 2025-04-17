import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/Services/Common/common.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SitoService } from 'src/Services/Sito/sito.service';
import { Pagine } from 'src/app/Model/Base/enum';
import { Images } from 'src/app/Model/Sito/Immagine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent {

  images: Images[] = [];
  slides: Images[] = [];
  plans: Images[] = [];

  constructor(private commonService: CommonService, private sitoService: SitoService)
  {
    this.GetHomepageImages();
    this.startAutoPlay()
  }

  currentSlide = 0;
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

  features = [
    {
      icon: '💪',
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers customized to your needs'
    },
    {
      icon: '🕒',
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock facility access'
    },
    {
      icon: '👥',
      title: 'Group Classes',
      description: 'Join our energetic group workouts with expert instructors'
    },
    {
      icon: '🥗',
      title: 'Nutrition Plans',
      description: 'Custom meal plans designed to help you reach your fitness goals'
    }
  ];

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
      this.nextSlide();
    }, 7000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  async GetHomepageImages(){
    await (await this.sitoService.GetImmaginiByPagina(Pagine.Homepage.valueOf())).subscribe(data => {
      if(data != null && data.Data != null)
        {
          data.Data.forEach((item: Images) => {
            item.urlImage = item.urlFromGoogleDrive ? this.commonService.getUrlForGoogleDrive(item.urlImage) : item.urlImage;

            this.images.push(item);

            //inizializzo immagini nelle varie sezioni
            this.slides = this.images.filter(f => f.section ==1).sort((a, b) => (a.order || 0) - (b.order || 0));
            this.plans = this.images.filter(f => f.section == 3).sort((a, b) => (a.order || 0) - (b.order || 0));
          });
        }
        else{
          alert("Errore recupero immagini homepage");
        } 
      });
    }
}
