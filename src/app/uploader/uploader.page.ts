import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  imageURL: string
  desc: string

  @ViewChild('filebutton', {static:false}) filebutton

  constructor(
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService
    ) { }

  ngOnInit() {
  }

  createPost(){
    const image = this.imageURL
    const desc = this.desc
    
    // try {
      this.afstore.doc(`users/${this.user.getUID()}`).update({ //change update-> set for first time
      posts: firestore.FieldValue.arrayUnion({
        image, 
        desc
      })
    })
  // }catch(err){
  //     this.afstore.doc(`users/${this.user.getUID()}`).set({ //change update-> set for first time
  //       posts: firestore.FieldValue.arrayUnion({
  //         image, 
  //         desc
  //       })
  //     })
  //   }
  }

  uploadFile(){
    this.filebutton.nativeElement.click()
  }

  fileChanged(event){
    const files = event.target.files
    
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '51235c1534321a34dd83')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event=> { 
      console.log(event)
      this.imageURL = event.json().file
    })
  }

}
