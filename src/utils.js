import { isEqual, uniqWith } from 'lodash';


export const decodeNumberInput = event => parseInt(event.target.value || 0)


export const unique = a => uniqWith(a, isEqual);


export const cellsAreEqual = (a, b) => a.x === b.x && a.y === b.y