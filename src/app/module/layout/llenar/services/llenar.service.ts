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
    this.db.collection('llenar-ki').doc().set({
      "date":llenar.date,
      "ki":llenar.ki,
      "kf":llenar.kf
    }).then(resp => {
      console.log(resp);
    }).catch((error) => {console.log(error);
    });
  }

  getLlenarList() { 
    return this.db
    .collection("llenar-ki")
    .snapshotChanges();
  }


  getUpdateList(id: string, data: any): Promise<void> {
    return this.db.collection('llenar-ki').doc(id).update(data);
  }

 

}

