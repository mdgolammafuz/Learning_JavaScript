/* In JavaScript, primitive types like numbers,
 booleans, and strings are passed by value. */

let numberOfGuests = 20;

let totalNumberOfGuests = numberOfGuests; // 20

// now change the value of the primitive type variable

numberOfGuests = 10;
console.log(numberOfGuests,totalNumberOfGuests)

// This is not the case with objects and arrays, which are passed by reference.

let artistProfile = {
    name: 'Tau Perkington',
    age: 27,
    available: true
};

let allProfiles = [artistProfile]; // new Array containing the above object

artistProfile.available = false; // changing the object

console.log(allProfiles, artistProfile) // will show { name: 'Tau Perkington', age: 27, available: false }

/*
Even though we created the array and passed it
the object before modifying the object, we still
see the modification in the array. This is
because when using arrays and objects, we are
passing references to the objects, as opposed to
the value of the data within them. The variables
artistProfile  and  allProfiles  shown above
contain references to the object and array in
memory.
*/