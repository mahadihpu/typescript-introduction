type Student = {
    name: string;
    age: number;
    major: string;
    studentId: string;
    bloodgroup: string;
    isMarried: boolean;
}


const student1: Student = {
    name: "Mahadi",
    age: 27,
    major: "Computer science",
    studentId: "BM0211655",
    bloodgroup: "Otve",
    isMarried: true
};

type Subject = string;
const subject: Subject = "Maths";


type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

//union

type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+" | "AB+"
}

const user1: User = {
    name: "Mezbah",
    gender: "male",
    bloodGroup: "O+",
};

//Union

type Bangladeshi = "Taka Khor" | "Imandar";

type BusinessMan = "Loss e Loss e Jibon" | "Taka r taka";

type Gorib = Bangladeshi | BusinessMan;

const gorib = "Loss e Loss e Jibon"; 


//Intersection

type FrontEndDeveloper = {
    skills: string[];
    designation1: "Front End Developer"
};

type BackEndDeveloper = {
    skills: string[];
    designation2: "Back End Developer"
};


type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;


const mahadi: FullStackDeveloper = {
    skills: ["React", "Nextjs", "Express", "TypeScript"],
    designation1: "Front End Developer",
    designation2: "Back End Developer"
}