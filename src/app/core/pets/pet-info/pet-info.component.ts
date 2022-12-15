import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Adopt } from 'src/app/model/adopt.model';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/service/pet.service';
import { ToastService } from 'src/app/service/toast.service';
import { ToastComponent } from 'src/app/toast/toast.component';

@Component({
  selector: 'pa-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  pet: Pet = new Pet()

  form: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    contact: new FormControl('',Validators.required)
  })

  constructor(private router: Router,public toastService: ToastService,private route: ActivatedRoute,private petService: PetService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.petService.getPet(params['id']).subscribe({
        next: (response: Pet) => this.pet = response
      })
    })
  }

  onSubmit() {
    let user = new Adopt(this.form.value)
    user.petId = this.pet._id
    user.petName = this.pet.name
    this.petService.postAdopt(user).subscribe({
      next: (response: any) => {
        this.router.navigate(['adoptions'])
      },
      error: (response: any) => {
        this.toastService.show('Graska!','Molimo vas da pokusate ponovo, ako opet dodje do greske molimo vas da nas obavestite!')
      }
    })
  }
}
