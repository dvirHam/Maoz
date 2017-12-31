import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit, OnDestroy{
    isActive: boolean = false;
    showMenu: string = '';

    public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };

    constructor(private mScrollbarService: MalihuScrollbarService){}

    ngAfterViewInit(){
        this.mScrollbarService.initScrollbar('.sidebar', { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: true } });
    }
    ngOnDestroy(){
        this.mScrollbarService.destroy('.sidebar');
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
