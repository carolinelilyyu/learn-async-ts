const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function promise_sum(arr: number[][], rowIdx: number): Promise<number>{
    return new Promise((resolve, reject) => {
        console.log('Promise sum called ... ');
        if(arr.length === 0 || rowIdx >= arr.length) {
            reject('Cannot sum an empty array');
        }

        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr[rowIdx].length; i++) {
                    console.log(`Adding ${arr[i]} to sum`);
                    sum += arr[rowIdx][i];
            }
            resolve(sum);
        }, 0); 
        console.log('returning from sum');
    });
}
const rowSumPromises: Promise<number>[] = [];
for(let x= 0; x<array2D_1.length; x++){
    rowSumPromises.push(promise_sum(array2D_1,x));
}

const s1 = Promise.all(rowSumPromises)
    .then((numbers: number[]) => {
    let totalSum = 0;
    for(const number of numbers){
        totalSum += number;
    }
    console.log(totalSum);
    }
)
.catch((error: any) => {
    console.error(`Failed to fetch: ${error}`);
});
