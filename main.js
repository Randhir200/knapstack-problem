let [n,k] = [7,15];
let profit = [4,2,8,14,18,6,10];
let weight = [2,1,4,7,6,2,5];
let ratio = [];

for(let i=0;i<n;i++){
    ratio.push((profit[i]/weight[i]));
}
let bag = 0;
let max = -Infinity;
let ind;
let tProfit = 0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(ratio[j]>=max){
            max = ratio[j]
            ind = j
        }
    }
    ratio[ind] = 0
   bag += weight[ind];
   tProfit += profit[ind];
}
console.log(bag,tProfit);