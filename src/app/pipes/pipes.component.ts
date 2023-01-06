import { Component } from '@angular/core';

interface ContactForm
{
  "valor": string;
  "valor2": number;
  "moneda": string;
}


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  model = {
    valor: "",
    valor2:"",
    moneda:"",
}

onSubmit(form :any) : void {
  console.log('Form values', form)
}


}
