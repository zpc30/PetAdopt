import { Component, OnInit } from '@angular/core';
import { PetList } from 'src/app/model/pet.model';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'pa-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: PetList = new PetList()
  constructor(private petService: PetService) { }

  params = {
    sort: '',
    sortDirection: 'asc',
    filter: {
      sex: '',
      category: ''
    }
  }

  ngOnInit(): void {
    this.petService.getAll(this.params).subscribe({
      next: (response: PetList) => this.pets = response 
    })
  }

  onCategory(event: any) {
    this.params.filter.category = event.target.value
    this.ngOnInit()
  }

  radioValue(event:any) {
    this.params.filter.sex = event.target.value
    this.ngOnInit()
  }

  onSort(event: any) {
    this.params.sort = event.target.value
    this.ngOnInit()
  }

}
