// Testing
// Converted from TypeScript to JavaScript

class Solution 
{
    minimum_index(seq) 
    {
        if (seq.length == 0) 
            {
            throw new Error("Cannot get the minimum value index from an empty sequence");
        }
        let min_idx = 0
        for (let i = 1; i < seq.length; ++i) 
            {
            if (seq[i] < seq[min_idx]) 
                {
                min_idx = i
            }
        }
        return min_idx
    }

    static TestDataEmptyArray = class 
    {
        get_array() 
        {
            return []
        }
    };

    static TestDataUniqueValues = class 
    {
        get_array() 
        {
            return [1, 2, 3]
        }

        get_expected_result() 
        {
            return 0
        }
    };

    static TestDataExactlyTwoDifferentMinimums = class 
    {
        get_array() 
        {
            return [1, 1, 2, 3]
        }

        get_expected_result() 
        {
            return 0
        }
    };
}

function testSolution() 
{
    const sol = new Solution()

    // Test case for TestDataEmptyArray
    try {
        const emptyArray = new Solution.TestDataEmptyArray().get_array()
        sol.minimum_index(emptyArray)
        console.error("TestDataEmptyArray: No exception was thrown for an empty array");
    } catch (e) {
        if (e.message === "Cannot get the minimum value index from an empty sequence") 
            {
            console.log("OK")
        } 
        else {
            console.error(`TestDataEmptyArray: Failed with unexpected error - ${e.message}`)
        }
    }

    // Test case for TestDataUniqueValues
    try {
        const uniqueArray = new Solution.TestDataUniqueValues().get_array()
        const expectedResult = new Solution.TestDataUniqueValues().get_expected_result()
        const result = sol.minimum_index(uniqueArray)
        if (result !== expectedResult) 
            {
            console.error(`TestDataUniqueValues: Expected ${expectedResult}, but got ${result}`)
        } 
        else {
            console.log("OK")
        }
    } catch (e) {
        console.error(`TestDataUniqueValues: Threw an exception - ${e.message}`)
    }

    // Test case for TestDataExactlyTwoDifferentMinimums
    try {
        const twoMinArray = new Solution.TestDataExactlyTwoDifferentMinimums().get_array()
        const expectedResult = new Solution.TestDataExactlyTwoDifferentMinimums().get_expected_result()
        const result = sol.minimum_index(twoMinArray)
        if (result !== expectedResult) 
            {
            console.error(`TestDataExactlyTwoDifferentMinimums: Expected ${expectedResult}, but got ${result}`)
        } else {
            console.log("OK")
        }
    } catch (e) {
        console.error(`TestDataExactlyTwoDifferentMinimums: Threw an exception - ${e.message}`)
    }
}

// Run the tests
testSolution()