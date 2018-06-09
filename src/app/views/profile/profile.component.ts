import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit 
{
  candidates = [
    {
      id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Len%C3%ADn_Moreno_con_el_l%C3%ADder_mexicano_L%C3%B3pez_Obrador_%28Recortado%29.png/220px-Len%C3%ADn_Moreno_con_el_l%C3%ADder_mexicano_L%C3%B3pez_Obrador_%28Recortado%29.png',
      name: 'Andres Manuel Lopez Obrador',
      description: 'Andres Manuel Lopez Obrador',
      party: 'MORENA',
      party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
    },
    {
      id: 2,
      image: 'https://az620379.vo.msecnd.net/images/Contracts/8e213a2d-32cc-432c-b8dc-13b8e117d2da.png',
      name: 'Ricardo Anaya Cortes',
      description: 'Ricardo Anaya Cortes',
      party: 'PAN',
      party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Ex1I1-Yd98ZUr4fbT7qWWt4lT5T8kGV4E21EqJFWm1OIX10T',
      name: 'José Antonio Meade',
      description: 'José Antonio Meade',
      party: 'PRI',
      party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
    },
    {
      id: 4,
      image: 'https://lideresmexicanos.com/wp-content/uploads/2016/06/Rodriguez-Calderon-Jaime-1.jpg',
      name: 'Jaime Rodríguez Calderón',
      description: 'Jaime Rodríguez Calderón',
      party: 'Independiente',
      party_image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo_MORENA.jpg'
    },
  ];

  private sub: any;
  public candidate;

  constructor(private route: ActivatedRoute) {
    console.log('constructor');
    console.log(this.candidates[0]);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.sub = this.route.params.subscribe(params => {
       // this.id = + params['id']; // (+) converts string 'id' to a number
       console.log(params);
       this.candidate = this.candidates[params['id'] - 1];
       console.log(this.candidates[params['id'] - 1]);
       // In a real app: dispatch action to load the details here.
    });
  }

}
