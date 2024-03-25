import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent {
  songs = [
    { name: 'Jazz Apricot', artist: 'Artist 1' },
    { name: 'Write You', artist: 'Artist 2' },
    // Add more songs here
  ];

  currentSong = this.songs[0];

  play() {
    // Logic to play the current song
  }

  pause() {
    // Logic to pause the song
  }

  // Add more methods as needed
}
