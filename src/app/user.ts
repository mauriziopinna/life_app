import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

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
        public zip:string
    ) {}
}