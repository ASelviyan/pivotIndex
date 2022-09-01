// given an array of number find the pivot index


//have a for loop that reads the array forwards adding up the numbers 
//have another for loop that loops in reverse adding up the numbers in the array. 
//compare the two sums 
//



// subtract the total sum and the left sum and the current index
// if the result is the same as the left sum then the index you are at is the pivot index



// find the total sum of the array of nums 
var pivotIndex = function (nums) {
    //this gets the sum of the array
    const totalSum = nums.reduce((accumulator, value) => {
        return accumulator + value
    })

    let leftSum = 0
    // then find the leftSum from the index you are at
    for (let i = 0; i < nums.length; i++) {
        let result = totalSum - leftSum
        leftSum += nums[i]
        if (leftSum === result) {
            return i
        }
    }
    return -1
};
