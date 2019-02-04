
// ejemplo de clase desde 


((a,l) => {

    class Person { 

    constructor (name,age,sex){ //contructor

        this.name = name
        this.age = age
        this.sex = sex
    }

    getting_date_person(){

        l(`
            =================================== Person Date =====================================
            \n
                Name: ${this.name} \n
                Age:  ${this.age}  \n
                sex:  ${this.sex} 

            =====================================================================================     
        `
        )
    }
     getting_dni() {
        
        let _age_min = 18

        if (this.age <= _age_min ) {
            a( `Usted ${this.name} no cumple con la edad minima que se requiere para tener un ${this.age}`)
        } else {
            
            const _na = Math.random()  * ( 1000 - 5000) + 1000

             const dni = `MSA ${ _na.toString()}  @!#4`  
            
            l( `
                        
            ${this.name} DNI es la siguiente : ${dni}
            `)
        }


    }
}

const person = new Person('Jose','19','masculino');

person.getting_date_person();
person.getting_dni();

})(console.warn ,console.log)

    
