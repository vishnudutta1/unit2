var person = {
    name : "vishnu",
    age : 27,
    car(){
        console.log(this.name)
        console.log(this.age)
    }
}

person.car();