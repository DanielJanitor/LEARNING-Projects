// CLASESS and modules
import {Person} from './person';

export class Teacher extends Person {
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach() {
        return 'He can teachs';
    }
}
