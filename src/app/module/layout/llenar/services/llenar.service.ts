import { Injectable } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Llenar } from '../models/llenar'

@Injectable({
  providedIn: 'root'
})
export class LlenarService {

  constructor(private db: AngularFirestore) { }

  addLlenar(llenar: Llenar){
    return new Promise<any>((resolve, reject) =>{
      this.db
        .collection('llenar-ki')
        .add(llenar)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  getList(id: any) { 
    return this.db
    .collection('llenar-ki')
    .doc(id)
    .valueChanges();
  }

  getLlenarList() { 
    return this.db
    .collection('llenar-ki')
    .snapshotChanges();
  }


  getUpdateList(llen: Llenar, id: any){
    return this.db
    .collection('llenar-ki')
    .doc(id)
    .update({
      date: llen.date,
      ki: llen.ki,
      kf: llen.kf,
      coments: llen.coments
    })
  }


 

}

