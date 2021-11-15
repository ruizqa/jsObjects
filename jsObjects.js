let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function challenge1(array){
    for(let i=0; i<array.length;i++){
        student= array[i];
        console.log(`Name: ${student.name}, Cohort: ${student.cohort}`)
    }
}

challenge1(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 }

 function challenge2(object){
     for(key in object){
         console.log(key.toUpperCase());
         for(let i =0; i<object[key].length;i++){
             person = object[key][i];
             console.log(`${i+1} - ${person.last_name.toUpperCase()}, ${person.first_name.toUpperCase()} - ${person.last_name.length + person.first_name.length}`)
         }
     }
     
 }

 challenge2(users);