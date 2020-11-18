const add= (a,b) =>{
    //console.log(arguments);
    return a+b;
};
console.log(add(4,5));

const user= {
    name: 'Kiran',
    cities: ['Kusunti', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in '+ city
           );
        
    }
};
console.log(user.printPlacesLived());

const multiplier ={
    numbers : [1,6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((x) => x * this.multiplyBy);
    }
};
console.log(multiplier.multiply());