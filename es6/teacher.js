import { Person } from "./person";

export function promote() {};

export default class Teacher extends Person { //inheritance in person class
    constructor(name, degree) {
        super(name); // use inheritance person class constructor name object reference...
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}