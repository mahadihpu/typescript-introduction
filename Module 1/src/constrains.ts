{

    const addCourseToStudent = <T extends {name: string, mail: string, devType: string}>(student: T) => {
        const course = "NEXT LEVEL WEB DEVELOPMENT";
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({name: "Mr. X", mail: "x@gmail.com", devType: "NLWD"})
    // const student2 = addCourseToStudent({name: "Mr. Y", mail: "y@gmail.com", hasWatch: true})  //contrains the use of haswatch

}
