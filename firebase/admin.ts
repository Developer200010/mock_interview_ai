import {cert, getApps, initializeApp} from "firebase-admin/app"
console.log(process.env.FIREBASE_PRIVATE_KEY);
const initFirebaseAdmin = () =>{
 const apps = getApps();
 if(!apps.length){
    initializeApp({
        credential:cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
        })
    })
 }
}