import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IHuman } from '../model.human';
import { HumanService } from '../human.service';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  humanForm: FormGroup;
  humans: IHuman[];
  errorMessage: string;

  flag: boolean;

  coment = 'Item has been successfully inserted';
  is_add = false;
  singleHuman = {} as IHuman;

  newHuman: IHuman = null;

  editHumanSelected = false;

  constructor(private humanService: HumanService) {
  }
  ngOnInit() {
    // debugger;
    this.humanService.getHumans().subscribe(
      humans => {
         this.humans = humans;
        },
      error => this.errorMessage = <any>error
    );
    this.humanForm = new FormGroup({
      'Id': new FormControl(null, Validators.required),
      'Name': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  addNewHuman(humandata) {
    this.flag = true;
    for (const h of this.humans) {
      if (h.Id === humandata.Id) {
        // console.log("In the Loop");
        this.flag = false;
        // this.newHuman = new Human(humandata.Id, humandata.Name, humandata.Email);
        const itemIndex = this.humans.findIndex(item => item.Id === humandata.Id);
        this.humans[itemIndex] = this.newHuman;
      }
    }

    this.editHumanSelected = false;

    if (this.flag) {
      // this.newHuman = new Human(humandata.Id, humandata.Name, humandata.Email);
      this.humans.unshift(this.newHuman);
      this.is_add = true;
    }
    this.humanForm.reset();
  }


  edit(human: IHuman) {
    this.editHumanSelected = true;
    this.singleHuman = human;
  }


  delete(human) {
    const itemIndex: number = this.humans.findIndex(item => item.Id === human.Id);
    console.log(itemIndex);
    if (itemIndex !== -1) {
      this.humans.splice(itemIndex, 1);
    }
  }

  details(human: IHuman) {
    // console.log("jfh");
    // this.router.navigate(['/human-details',{Id :human.Id}]);
    // this.router.navigate(['/human-details', human.Id]);
  }

}

