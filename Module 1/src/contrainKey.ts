{

type Vehicle = {
    bike: string;
    car: string;
    jet: string;
};


type Owner = "bike" | "car" | "jet"; //manually
type Owner2 = keyof Vehicle;

const person1:Owner = "car";
const person2:Owner2 = "jet";


const getProperty = <X , Y extends keyof X>(obj: X, key: Y) =>{
return obj[key];
}

}