/**
 * fisher-yates-shuffle(see https://bost.ocks.org/mike/shuffle) for Immutable.js Lists
 * @param  {[Immutable.List]} List [any immutable.js list]
 * @return {[Immutable.List]} Shuffled-List [the same list shuffled]
 */
function shuffle(list) {
    const shuffled = list.withMutations(mutableList => {
        let currentItem = mutableList.size;
        let tmp = null;
        let swappedItem = null;
        while(currentItem) {
            // Pick a remaining element…
            swappedItem = Math.floor(Math.random() * currentItem--);
            // swap with current element
            tmp = mutableList.get(currentItem);
            mutableList.set(currentItem, mutableList.get(swappedItem));
            mutableList.set(swappedItem, tmp);
        }
    });

    return shuffled;
};

module.exports = shuffle;
