import { Component } from '@angular/core'

// this is passing event to component not a good practise

@Component({
    selector: 'key-up1',
    template: `
<input(keyup)="onKey($event)">
<p>{{values}}</p>
`
})

    /*
export class KeyUpComponent_v1 { 
    values = '';
    onKey(event: any) { //without type info
        this.values += event.target.value + '| ';
    }
}
    */

export class KeyUpComponent_v1 { //with type info
    values = '';
    onKey(event: KeyboardEvent) {  
        this.values +=(<HTMLInputElement>event.target).value+'| ';
    }
}


// This keystroke event passing event to component object
// is a dubious practise. so we are implementing
// template reference variable

@Component({
    selector: 'key-up2',
    template: `
<input #box="onKey(box.value)"> // implementing template reference
<p>{{values}}</p> // we can represent as box.value in interpolation but not a good practise
`
})

export class KeyUpComponent_v2 { //with type info
    values = '';
    onKey(value: string) {
        this.values += value + '| ';
    }
}

// for user to enter a event of enter keystroke to end typing

@Component({
    selector: 'key-up3',
    template:
    `<input #box(keyup.enter)="onEnter(box.value)"> // on clicking enter user ends typing by keyup.keycode
    <p>{{value}} </p>
`
})

export class KeyUpComponent_v3 { //with type info
    value = '';
    onKey(value: string) {
        this.value = value;
    }
}

// when user clicks away from the input box to update without loosing
// to listen both enter event and the blur event

@Component({
    selector: 'key-up4',
    template:
    `<input #box(keyup.enter)="onEnter(box.value)" // on clicking enter user ends typing by keyup.keycode
    (blur)="update(box.value)">
    <p>{{value}} </p>
`
})

export class KeyUpComponent_v4 { //with type info
    value = '';
    onKey(value: string) {
        this.value = value;
    }
}










