
function manipulateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        // Filter out odd numbers
        const evenNumbers = arr.filter(num => num % 2 === 0);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").textContent = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((arr) => {
        // Multiply each number by 2
        const doubledNumbers = arr.map(num => num * 2);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").textContent = doubledNumbers;
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}

manipulateData();
