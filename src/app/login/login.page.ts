import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController
    ) { }

  ngOnInit() {
  }

  async login(){
    const {username, password} = this

    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
        this.showAlert("Success", "Login successful")
    } catch(err) {
        console.dir(err)
        if(err.code === "auth/user-not-found"){
          console.log("User not found");
          this.showAlert("Error", err.message)
        }
    }

    }

    async showAlert(header: string, message: string){
      const alert = await this.alert.create({
        header,
        message,
        buttons: ["ok"]
      })
      await alert.present()
    }

}
