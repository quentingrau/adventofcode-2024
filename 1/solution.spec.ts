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

