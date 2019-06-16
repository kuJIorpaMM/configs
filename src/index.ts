import {Observable, Subscription, fromEvent} from "rxjs";

// @ts-ignore
const seq$: Observable<number> = fromEvent(document, 'click');

// @ts-ignore
const subscription: Subscription =  seq$.subscribe( ( e: Event ) => {
    console.log(e);
} );