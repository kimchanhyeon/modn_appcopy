/*
 * Modules
 */
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/*
 * Components 
 */

/*
 * Models 
 */

/*
 * Providers 
 */

@Component({
    selector : 'product-form',
    templateUrl : 'product-form.html'
})
export class ProductForm{
    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductForm Component');
    }
}