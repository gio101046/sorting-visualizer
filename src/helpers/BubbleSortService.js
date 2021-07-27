
class BubbleSortService {
    constructor(array) {
        this.array = array;
        this.currentIndex = 0;
        this.swapped = false;

        // weird javascript this thing
        this.sort = this.sort.bind(this);
    }

    sort() {
        let swapped;
        do {
            swapped = false;
            for (var i = 0; i < this.array.length - 1; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    var temp = this.array[i];
                    this.array[i] = this.array[i + 1];
                    this.array[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }
}