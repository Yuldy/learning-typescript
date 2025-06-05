//let user: object;

// let user: {
//     name: string;
//     age: number;
//     isAdmin: boolean;
//     id: string | number;
// }

// user = {
//     name: "Christian",
//     age: 22,
//     isAdmin: true,
//     id: 'abc' //123
// }


//let hobbies: Array<string>; //type is required when making arrays
let hobbies: string[];

hobbies =['Sports', 'Cooking', 'Reading'];


function add(a: number, b: number): void {
    const result = a + b;
    console.log(result);
    
}

function subtract(a: number, b: number): number {
    const result = a - b;
    console.log(result);
    return result;
}

// Creating types

type StringOrNum = string | number;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

let user: User;

// INTERFACES:
interface Credentials {
    password: string;
    email: string;
}

// Can make the object here
let creds: Credentials;

creds = {
    password: "abc",
    email: "hello@gmail.com"
}

// Custome Types
class AuthCredentials implements Credentials {
    email: string;
    password: string;
    userName: string;
}

function login(credentials: Credentials) {

}

login(new AuthCredentials())

// MERGING TYPES

type Admin = {
    permissions: string[];
}

type AppUser = {
    userName: string;
}

// Combination of these two types:
type AppAdmin = Admin & AppUser;


let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'Max'
}