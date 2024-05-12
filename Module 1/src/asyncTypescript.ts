
{

    const createPromise = () => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "somethign";
            if(data){
                resolve(data)
            }else{
                reject("Data not found")
            }
        })
    }


    //calling create promise

    const showData = async () => {
         const data:string = await createPromise();
         console.log(data)
    }

    showData()


    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    };

    const getTodo = async(): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data
    }
}