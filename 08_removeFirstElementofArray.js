

const students = ["Luffy", "Roronoa Zoro", "Antony", "sanji"];

console.log("Students Before:", students);

const deletedStudent = students.shift();

console.log("Removed Student:", deletedStudent);
console.log("Students After:", students);


// Using for loop

const employeeList = ["Boyd", "Jim", "Hopper", "Jully"];

const removeFirstEmployee = (employeeList) => {

    let updatedList = [];

    for (let i = 1; i < employeeList.length; i++) {
        updatedList.push(employeeList[i]);
    }

    console.log("Updated Employee List:", updatedList);

};

removeFirstEmployee(employeeList);


// Using slice() method

const movies = ["Dhurandhar", "Marco", "Kill", "Kgf"];

const remainingMovies = movies.slice(1);

console.log("Remaining Movies:", remainingMovies);