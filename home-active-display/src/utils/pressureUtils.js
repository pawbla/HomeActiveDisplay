import {sortByDateDesc} from './utils';

const HISTORY_HOURS = [12,9,6,3,1]

export function calculateHistory(historyArr, currentPressure) {
    let historyValues = [];

    if (historyArr.length > 0) {
        let historyArrSorted = historyArr.sort(sortByDateDesc);       
        HISTORY_HOURS.forEach(i => {
            historyValues.push(
                {
                    name: -i,
                    value: historyArrSorted[i-1].value
                }
            )
        })
    }
    historyValues.push({
        name: "now",
        value: currentPressure
    });

    return historyValues;
}

