class BubbleSortService {
    #array;
    #currentIndex = 0;
    #swapped = false;

    constructor(array) {
        this.#array = array.slice();
    }

    isSorted() {
        return !this.#swapped;
    }

    resetSwapFlag() {
        this.#swapped = false;
    }

    next() {
        if (this.#currentIndex < this.#array.length - 1) {
            this.#currentIndex++;
            return true;
        }

        this.#currentIndex = 0;
        return false;
    }

    shouldSwap() {
        return this.#array[this.#currentIndex] > this.#array[this.#currentIndex + 1];
    }

    swap() {
        var temp = this.#array[this.#currentIndex];
        this.#array[this.#currentIndex] = this.#array[this.#currentIndex + 1];
        this.#array[this.#currentIndex + 1] = temp;
        this.#swapped = true;
    }

    getArray() {
        return this.#array.slice();
    }

    // TODO: remove this later, only here for reference
    sort() {
        let swapped;
        do {
            swapped = false;
            for (var i = 0; i < this.#array.length - 1; i++) {
                if (this.#array[i] > this.#array[i + 1]) {
                    var temp = this.#array[i];
                    this.#array[i] = this.#array[i + 1];
                    this.#array[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }
}

array = [10, 5, 8, 2, 4, 1, 3, 7, 6, 9];
sortService = new BubbleSortService(array);

console.log(sortService.getArray());
sortService.sort();
/*
do {
    sortService.resetSwapFlag();
    do {
        if (sortService.shouldSwap()) {
            sortService.swap();
        }
    } while (sortService.next());
} while(!sortService.isSorted());
*/

console.log(sortService.getArray());