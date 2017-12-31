import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocalDataSource } from 'ng2-smart-table';
import {ApiService} from '../../shared/services/ApiService';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    source: LocalDataSource;
    public settings = {
        columns: {
          id: {
            title: 'ID',
            editable: false,
            addable: false,
          },
          name: {
            title: 'Full Name',
          },
          username: {
            title: 'User Name',
          },
          email: {
            title: 'Email',
          },
        },
    };
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(protected  api: ApiService) {
        this.source = new LocalDataSource();

        // this.api.getUsers().toPromise().then((data) => {
            this.source.load([
                {
                    id: '1',
                    name: 'John',
                    username: 'jsmith',
                    email: 'jsmith@api.com'
                },
                {
                    id: '2',
                    name: 'Ruben',
                    username: 'rubi',
                    email: 'rubi@api.com'
                },
                {
                    id: '3',
                    name: 'Assaf',
                    username: 'assafush',
                    email: 'assafush@api.com'
                }
            ]);
        // });
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
