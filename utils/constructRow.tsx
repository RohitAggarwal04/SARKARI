// Create an array of columns
const constructRow = (data: any, columns: number = 2) => {
    // Calculate the number of items per column
    const itemsPerColumn = Math.ceil(data.length / columns);

    return Array.from({ length: columns }, (_, columnIndex) => {
        const startIndex = columnIndex * itemsPerColumn;
        const endIndex = startIndex + itemsPerColumn;
        return data.slice(startIndex, endIndex);
    })
}

export default constructRow;