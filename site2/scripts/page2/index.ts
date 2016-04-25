import { foo } from "scripts/someModule";
import { bar } from "shared/someSharedModule";

class Person {
	constructor(public name: string) {
		console.log(bar());
		console.log(foo(1));
		console.log(this.name);
	}
}

console.log(new Person("John").name);