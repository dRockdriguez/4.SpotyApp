import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  pistas: any = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.map(params => params['id']).subscribe(id => {
        this._spotifyService.getArtista(id).subscribe(artista => this.artist = artista);
        this._spotifyService.getTop(id).map((resp:any) => resp.tracks).subscribe(pistas => this.pistas = pistas);

    });

  }

}
