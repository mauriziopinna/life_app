export class preventivo{
    constructor(
        public cod_prev:string,
        public cod_prodotto:string,
        public status:string,
        public fumatore:string,
        public capitale:number,
        public durata:number,
        public portafoglio_greater_500:boolean,                
        public work_finance:boolean,
        public altre_polizze:boolean,
        public premio_capitale_cost:number,
        public premio_cap_descr:number
    ){}
}