/*
 * Modules
 */
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Http, Headers, RequestOptions } from '@angular/http';

import * as cheerio from 'cheerio';
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
    selector : 'product-view',
    templateUrl : 'product-view.html'
})
export class ProductView{
    res:any;
    /*
    public url:string = "http://mitem.gmarket.co.kr/Item?goodsCode=904107371";
    public html:string = ""; 
    constructor(public navCtrl: NavController, public navParams: NavParams, http:Http) {
        let headers = new Headers( { 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Content-Type': 'application/x-www-form-urlencoded' 
        });
        let options = new RequestOptions({headers:headers});
        http.get(this.url, options).map(this.getHtml).subscribe(html=>this.html=html);
    }
    public getHtml(html:any):any{
        console.log("this is getHtml")
        console.log(html);
        return this.html = html.text();
    }
    */
    
    constructor(public navCtrl: NavController, public navParams: NavParams, http:Http) {
        
    }
    public hideForm():void{
        console.log("hello")
        let iframe:any = document.getElementById('product');
        console.log(document.getElementById('product'));
        //let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        //console.log(innerDoc.getElementById("vipOptionArea"));
        
        //if(innerDoc.getElementById("vipOptionArea")!=null){
        //    innerDoc.getElementById("vipOptionArea").style.visibility="hidden";
        //}
        //}
        /*
        res= cheerio.load(iframe);
        console.log(res.html())
        res("div.option_wrap").attr('style', 'visibility:hidden');
        console.log(res.html())
        //console.log(iframe);
        */
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductView Component');
    }
}