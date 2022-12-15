import { Component, OnInit } from '@angular/core';
import { AdoptList } from 'src/app/model/adopt.model';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'pa-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {
  adoptions: AdoptList = new AdoptList()
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getAdopt().subscribe({
      next: (response: AdoptList) => this.adoptions = response
    })
  }
  onDelete(id: number) {
    this.petService.deleteAdopt(id).subscribe({
      next: (response: any) => {
        console.log('deleted')
        this.ngOnInit()
      },
    })
    this.petService.deletePet(id).subscribe({
      next: (response: any) => {
        console.log('deleted')
        this.ngOnInit()
      },
    })
  }
}
