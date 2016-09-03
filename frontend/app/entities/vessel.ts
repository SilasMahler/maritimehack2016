/**
 * Created by Silas on 03.09.2016.
 */
import { Component } from '@angular/core';

@Component({selector: 'vessel'})
export class Vessel {
    id: number;
    name: string;
    type: string;
    length:number;
    beam: number;
    manager: string;
    owner: string;
    insurer: string;
    eng_bulder: string;
}