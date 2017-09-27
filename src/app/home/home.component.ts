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
    users : any = [];
    usernames: string;
    names: string;
    useroptions: string;
   

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        
        this.usernames = _.map(this.users, 'username');
        //this.names = _.map(this.users, 'name');
        this.useroptions = _.union(this.usernames, this.names);
        
    }

    submitComment()
    {
        let commentdate = moment(new Date()).format( "DD-MM-YYYY (HH:mm)");
        this.comments.push({username: this.currentUser.username, comment: this.model.comment, time: commentdate});
        this.model.comment = '';
    }

    private loadAllUsers() {
        this.userService.getAll();
        console.log(this.users)
    }
}