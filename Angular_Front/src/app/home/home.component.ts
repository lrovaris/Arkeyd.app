import { Component, OnInit, ViewChild, signal, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild('myVideo') myVideo: any;

  gambiarra = true;

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    setInterval(()=>{
      this.getCountdownString()

    },1000)


  }

  playVideo(): void {
    const videoElement: HTMLVideoElement = this.myVideo.nativeElement;
    console.log(videoElement)
    videoElement.play();
    this.gambiarra = false;
  }

  secondsLeft = 0

  launchDate = signal(1686865696)


  getCountdownString(): any {

    const now = Math.floor(Date.now() / 1000);
    const phaseTime = 1686865696

    this.secondsLeft = phaseTime - now;

    const days = Math.floor(this.secondsLeft / (60 * 60 * 24));
    const hours = Math.floor((this.secondsLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((this.secondsLeft % (60 * 60)) / 60);
    const seconds = Math.floor(this.secondsLeft % 60);

    return { days, hours, minutes, seconds }

  }

}
