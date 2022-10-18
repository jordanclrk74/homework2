//  Problem 1: Create a new Set() object // 

    const nameSet = new Set(["jordan clark","tony kim"])

    // Add a new value of:    ‘john doe’ 

    nameSet.add('john doe')

    // Check if the value of ‘john doe’ exists 

    nameSet('john doe')

    // Remove the value of ‘john doe’

    nameSet.delete('john doe')

// Problem #2: Create a new Map() object //

    const nameMap = new Map();
    
    // Add a new key-value pair of:    name: ‘john doe’ 

    nameMap.set('name', 'john doe')

    // Check if the value ‘john doe’ exists 

    Object.values(nameMap).includes('john doe')

    // Remove the key-value pair of ‘john doe’

    nameMap.delete('name')

// Problem #3 //

    [1, 2, 3, 4]

// Problem #4 //

    // This will convert it to a string.

// Problem #5 //

    [1,2,3], false

// Problem #6 //

    function hasDuplicate(arr) {
        return new Set(arr).size !== arr.length;
    }

    if (hasDuplicate(arr)) {
        console.log("Duplicate elements found.");
    }
    else {
        console.log("No Duplicates found.");
    }

// Problem #7 //

    function vowelCount(string) {
        let vowelsCount = 0;

        const vowelMap = new Map()
    
        for (var i = 0; i <= string.length - 1; i++) {
    
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
        }
        return vowelMap;
    }

// Big O problems //

    // 1 //

        // Linear. Grows to the size of the data structure since it's a for loop.

    // 2 //

        // Linear. Has to iterate through each element and push it.

    // 3 //

        // Quadratic. Has to go through each value and loop through several tests of the function.

    // 4 //

        // Constant time. Will iterate through once.

    // 5 //

        // Logarithm time. Size of input data decreases.

    // 6 //

        // Quadratic. Has to go through several iterations.

    // 7 //

        // Constant time. Has to iterate through arrays and return pairs.

    // 8 //

        // Quadratic. Due to the complexity of the sorting.

    // 9 //

        // Constant. Iterates through to find duplicates.

    // 10 //

        // Linear. Iterates through filtered data.



