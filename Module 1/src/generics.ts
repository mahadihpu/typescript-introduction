{

    //generic type

    const rollNumbers: Array<number> = [33,38,49];

    const mentors: Array<string> = ['Mahadi', 'Towmir', 'Iqbal']; 

    type GenericArray = Array<number>;

    const money:GenericArray = [1000, 2000, 3400];

    //dynamic generics
    type Generic<T> = Array<T>

    const painters:Generic<string> = ['Donny','Ali', 'Tony'];
    const salary: Generic<number> = [1200,1500,2500]; 


    const user:Generic<{name: string, age: number}> = [
        {
            name: "Mahadi",
            age: 27
        },
        {
            name: "Emranul",
            age: 43
        }
    ]

    //generic tuple
    type GenericTuple<X,Y> =  [X , Y];

    const people:GenericTuple<string, string> = ["Mahadi", "Faysal"];

    const salaryMan:GenericTuple<number, {name: string, age: number}> = [2000, {name: "Mahadi", age: 27}]


    //interface - with generics

    interface Developer<T> {
        name: string;
        age: number;
        computer: {
            brand: string;
            model: string;
            releaseDate: number;
        },
        smartWatch: T   //dynamic Generics
    }

    type SmartWatch = {
        brand: string;
        price:number
    }

    interface ExpensiveWatch extends SmartWatch{
        display: string;
        rom: number
    }

    const poorDeveloper :Developer<SmartWatch> = {
        name: "Mahadi",
        age: 27,
        computer: {
            brand: "Lenovo",
            model: "G 81",
            releaseDate: 2018
        },
        smartWatch: {
            brand: "Hylou Solar",
            price: 2400
        }
    }

    const richDev :Developer<ExpensiveWatch> = {
        name: "Mahadi",
        age: 27,
        computer: {
            brand: "Lenovo",
            model: "G 81",
            releaseDate: 2018
        },
        smartWatch: {
            brand: "Hylou Solar",
            price: 2400,
            display: "OLED",
            rom: 2
        }
        
    }

    //function with Generics

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }

    const res1 = createArrayWithGeneric<string>('Bangladesh');
    const resGenericObj = createArrayWithGeneric<{name: string; age: number}>({
        name: "Mahadi",
        age: 27
    })

    const addCourseToStudent = <T>(student: T) => {
        const course = "NEXT LEVEL WEB DEVELOPMENT";
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({name: "Mr. X", mail: "x@gmail.com", devType: "NLWD"})
    const student2 = addCourseToStudent({name: "Mr. Y", mail: "y@gmail.com", hasWatch: true})
}
