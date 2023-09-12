interface Contact {
    id: number;
    name: string;
    //writing function inside the interface
    //clone(name:string):Contact;
}

function clone(source:Contact) :Contact{
    //return source;
    //return "Address";
    return Object.apply({}, source);
}

const a: Contact ={
    id:123, name:"Andrew"
};
const b =clone(a)