import * as fs from 'node:fs';

export const getTotalDistance = (firstList: number[], secondList: number[]) => {
    firstList.sort();
    secondList.sort();

    let totalDistance = 0;
    for (let i = 0; i < firstList.length; i++) {
        const distance = Math.abs(secondList[i] - firstList[i]);
        totalDistance += distance;
    }

    return totalDistance;
}

export const getSimilarityScore = (firstList: number[], secondList: number[]) => {
    firstList.sort();
    secondList.sort();

    let occurences: Record<number, number> = {};
    for (let i = 0; i < firstList.length; i++) {
        for (let j = 0; j < secondList.length; j++) {
            if (firstList[i] === secondList[j]) {
                occurences[firstList[i]] = occurences[firstList[i]] ? 1 + occurences[firstList[i]] : 1;
            }
        }
    }

    return Object.entries(occurences).reduce((acc, [key, value]) => acc + Number(key) * value, 0);
}

const firstList: number[] = [];
const secondList: number[] = [];

fs.readFileSync('1/input', 'utf-8').trim().split('\n').forEach(line => {
    const [word1, word2] = line.split(/\s+/);
    firstList.push(Number(word1));
    secondList.push(Number(word2));
});

console.log(getTotalDistance(firstList, secondList));
console.log(getSimilarityScore(firstList, secondList));
