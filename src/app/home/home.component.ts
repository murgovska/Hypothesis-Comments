import { Component, OnInit } from '@angular/core';

import { User } from '../models/index';
import { UserService } from '../services/index';

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    model: any = {};
    //users: User[] = [];
    comments: any = [];
    users : any = [{name:"Kristina", surname:"Murgovska"}, {name:"Giuseppe", surname:"Bellomo"}]
    usernames: string;
   

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = {name: "Kristina Murgovska", username: "murgovska", password: "", avatarUrl: "/assets/images/avatar.png"};
    }

    ngOnInit() {
        this.loadAllUsers();
        this.usernames = _.map(this.users, 'name');
    }

    submitComment()
    {
        let commentdate = moment(new Date()).format( "DD-MM-YYYY (HH:mm)");
        this.comments.push({username: 'murgovska', comment: this.model.comment, time: commentdate});
        this.model.comment = '';
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}