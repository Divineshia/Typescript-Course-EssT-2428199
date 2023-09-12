interface Contact {
    id: number;
    name: string;
}

interface UserContact {
    id: number;
    name: string;
    username:string;
}
//using generics type T as metadata
function clone<T>(source: T): T {
    return Object.apply({}, source);
}

function clone1 <T1, T2 extends T1>(source:T1):T2{
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)
const c=clone1<Contact, UserContact>(a)