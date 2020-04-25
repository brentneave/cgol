// @ts-nocheck


export const decodeNumberInput = event => parseInt(event.target.value || 0)


export const unique = a => [...new Set(a)] 


export const cellsAreEqual = (a, b) => a.x === b.x && a.y === b.y