import {getSimilarityScore, getTotalDistance} from "./solution";

describe('Get the total distance between two lists', () => {
  it('should return the sum of the difference between each number given sorted lists', () => {
    const firstList = [1, 2, 3, 4, 5];
    const secondList = [3, 4, 5, 6, 7];
    // Total distance = |3-1| + |4-2| + |5-3| + |6-4| + |7-5| = 2 + 2 + 2 + 2 + 2 = 10

    const totalDistance = getTotalDistance(firstList, secondList);

    expect(totalDistance).toBe(10);
  });

  it('should return the sum of the difference between each number given not sorted lists', () => {
    const firstList = [1, 2, 3, 4, 5];
    const secondList = [6, 5, 4, 3, 2];
    // Total distance = |2-1| + |3-2| + |4-3| + |5-4| + |6-5| = 1 + 1 + 1 + 1 + 1 = 5

    const totalDistance = getTotalDistance(firstList, secondList);

    expect(totalDistance).toBe(5);
  });
});

describe('Get the similarity score between two lists', () => {
  it('should return the sum of the occurence of each number of the first list in the second list', () => {
    const firstList = [1, 2, 3, 4, 5];
    const secondList = [2, 3, 4, 5, 6];
    // Similarity score = 0 + 2*1 + 3*1 + 4*1 + 5*1 = 2 + 3 + 4 + 5 = 14

    const similarityScore = getSimilarityScore(firstList, secondList);

    expect(similarityScore).toBe(14);
  })

  it('should return the sum of the occurence of each number of the first list in the second list given multiple occurences', () => {
    const firstList = [1, 2, 3, 4, 5];
    const secondList = [2, 2, 3, 5, 5];
    // Similarity score = 0 + 2*2 + 3*1 + 5*2 = 4 + 3 + 10 = 17

    const similarityScore = getSimilarityScore(firstList, secondList);

    expect(similarityScore).toBe(17);
  })
});
