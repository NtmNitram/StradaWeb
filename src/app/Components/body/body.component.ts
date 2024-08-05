import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  ventanaEmergenteVisible: boolean = false;

  mostrarVentanaEmergente() {
    this.ventanaEmergenteVisible = true;
  }

  cerrarVentanaEmergente() {
    this.ventanaEmergenteVisible = false;
  }

  // Método para enviar el formulario
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_90voyko', 'template_19dnk1z', e.target as HTMLFormElement, '0fTEr8TgX2eFizh5k')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito!');
      }, (error) => {
        console.log(error.text);
        alert('Hubo un error al enviar el mensaje.');
      });
  }
}


