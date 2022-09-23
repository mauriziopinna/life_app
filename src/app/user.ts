import { preventivo } from "./preventivo";
export class User {
    constructor(
        public email: string,
        public password: string,
        public type:string,
        public name:string,
        public surname:string,
        public birthdate:string,
        public telephone:string,
        public address:string,
        public state:string,
        public region:string,
        public zip:string,
        public birth_place:string,
        public sesso:string,
        public codice_fiscale:string,
        public titolo_studio:string,
        public professione:string,
        public altezza:number,
        public peso:number,
        public preventivi: preventivo[]//dev'essere un dizionario di preventivi
        //ovvero un dizionario delle coppie stringhe/preventivo


    ) {}
}