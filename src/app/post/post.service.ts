import {Injectable} from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'

export interface Post {
    loc: string;
    desc: string
    type: string
}


@Injectable({
    providedIn: 'root'
})
export class PostService {
    
    private post = []

    constructor() { }

    setPost(id, post){
    }

    getPost(){
    }

}