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
var Employee = /** @class */ (function () {
    function Employee(_name, age, tall) {
        var _this = this;
        this._name = _name;
        this.age = age;
        this.tall = tall;
        this.printInfo = function () {
            console.log("".concat(_this.name, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, " \uC774\uACE0 \uD0A4\uB294  ").concat(_this.tall));
        };
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            console.log("get 호출 :" + this._name);
            return this._name;
        },
        set: function (vale) {
            console.log("set 호출 :" + vale);
            this._name = vale;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var e1 = new Employee("vvv", 11, 11);
e1.name = "찐";
e1.printInfo();
