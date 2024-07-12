import { Component } from '@angular/core';

@Component({
    template: `
        <h3>Counter: {{counter}}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="counter=10">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
        `,
    selector: 'app-counter',
})
export class CounterComponent {
    title: string = 'Mi primera app de Angular';
    counter: number = 10

    increaseBy(value: number): void {
        this.counter += value
    }
}