export const calcMinMaxPrice = (originalState) => {
    if (originalState?.length > 0) {
        const min = originalState?.map(x => x.price);
        return {
            min: min.reduce((acc, item) => acc < item ? acc : item),
            max: min.reduce((acc, item) => acc > item ? acc : item)
        }
    }
    return {
        min: 0,
        max: 0
    }
}