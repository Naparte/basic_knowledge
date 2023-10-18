type c = Exclude<T, U>;


interface Data<T> {
	value: T;
	makeArray?(v: T): T[];
}

const d1: Data<number>  = { value: 1, makeArray: v => v * 2 };
const d3: Data<string>  = { value: 'hi', double: v => v + v };
const d2: Data<boolean> = { value: true, double: v => v };
