// let student = {
//   name: "jake",
//   course: "Getting Start",
//   codingIQ: 80,
//   code: function () {
//     console.log("gooood");
//   },
// };

// console.log(student.name);

// let student2: {
//   name: string;
//   course: string;
//   codingIQ: number;
//   code: () => void;
// };

// // student2.name = "222zz";

// // console.log(student2.name);

// function cacl(lostPoint: any): number {
//   return 100 - lostPoint;
// }

// interface Student {
//   // readonly studentId: number;
//   studentId: number;
//   studnetName?: string;
//   gender?: GenderType.Male | GenderType.Female;
//   addComment?: (c1: string) => string;
// }

// enum GenderType {
//   Male,
//   Female,
// }

// let a: string = "hello!";
// let b: number = 10;
// let c: boolean = false;
// a = "zzss";

// function getStudent(studentId: number): Student {
//   return {
//     studentId: 10,
//     studnetName: "swj",
//     gender: GenderType.Male,
//   };
// }

// function saveStudent(student: Student): void {
//   student.studentId = 12;
// }

// let st1 = {
//   studentId: 10,
//   studnetName: "dd",
//   gender: GenderType.Male,
// };
// saveStudent(st1);

// type strOrNum = number | string;

// function zzz(ddd: strOrNum): void {}

// const setItem = (price: strOrNum): void => {
//   if (typeof price === "string") {
//   } else {
//   }
// };

class Employee {
  constructor(
    private _name: string,
    private age: number,
    private tall: number
  ) {}

  public printInfo = (): void => {
    console.log(`${this.name}의 나이는 ${this.age} 이고 키는  ${this.tall}`);
  };

  get name() {
    console.log("get 호출 :" + this._name);

    return this._name;
  }
  set name(vale: string) {
    console.log("set 호출 :" + vale);

    this._name = vale;
  }
}

let e1 = new Employee("vvv", 11, 11);
e1.name = "찐";
e1.printInfo();
