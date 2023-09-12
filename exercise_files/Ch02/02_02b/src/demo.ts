interface Contact extends Address{
    id:number;
    name:string;
    passsword:any;
    birthdate:Date;
}

// ? question mark gives the field as optional one,
//but it still remain in assigned type variable
interface Address {
    apt?:number;
    street?:string;
    region?:string;
    postalcode:string;

}

let primaryContact: Contact = {
    id:1256,
    name:"Jane",
    passsword:"pass123",
    birthdate:new Date("01-10-1996"),
    region:"Newyork",
    postalcode: "60016",


}