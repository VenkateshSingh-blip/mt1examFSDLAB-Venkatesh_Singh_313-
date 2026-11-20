function secondLargest(...numbers) {
    let largest = numbers[0];
    let second = null;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            second = largest;
            largest = numbers[i];
        }
        else if (numbers[i] < largest &&
                 (second === null || numbers[i] > second)) {
            second = numbers[i];
        }
    }
    return second;
}
console.log("Second Largest:", secondLargest(10, 25, 40, 15, 30));