import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'

interface post {
    author: string,
    desc: string,
    loc: string,
    type: string
}

@Injectable()
export class PostService {
    private post: post

    constructor(

    ){

    }

    setPost(post: post){
        this.post = post
    }

    getAuthor(): string{
        return this.post.author
    }
    getDesc(): string{
        return this.post.desc
    }
    getLoc(): string{
        return this.post.loc
    }
    getType(): string{
        return this.post.type
    }

}