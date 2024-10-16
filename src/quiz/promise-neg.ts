const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function promise_neg(arr: number[][], rowIdx: number): Promise<number[]>{
    return new Promise((resolve, reject) => {
        console.log('Promise sum called ... ');
        if(arr.length === 0 || rowIdx >= arr.length) {
            reject('Cannot sum an empty array');
        }

        setTimeout(() => {
            for (let i = 0; i < arr[rowIdx].length; i++) {
                if (arr[rowIdx][i] < 0) {
                    console.log(`Row ${rowIdx} contains negative number(s): ${arr[rowIdx]}`);
                    resolve(arr[rowIdx]); // Resolve with the row if negative numbers are found
                } else {
                    resolve([]); // Resolve with an empty array if no negatives are found
                }
            }
        }, 0); 
    });
}
const negPromises: Promise<number[]>[] = [];
for(let x= 0; x<array2D_3.length; x++){
    negPromises.push(promise_neg(array2D_3,x));
}

const s2 = Promise.any(negPromises)
    .then((rowsWithNegatives: number[]) => {
            console.log("detected row with negatives.");
    }
)
.catch((error: any) => {
    console.error(`Failed to fetch: ${error}`);
});
