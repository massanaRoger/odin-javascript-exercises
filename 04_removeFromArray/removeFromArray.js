const removeFromArray = function(array, ...elements) {
    const indexes = [];
    elements.forEach(el => {
        indexes.push(array.indexOf(el))
    })
    indexes.sort().reverse();
    for (const index of indexes) {
        if (index !== -1)
            array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
