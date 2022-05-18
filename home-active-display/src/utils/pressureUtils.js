import {sortByDate} from './utils';

const HISTORY_HOURS = [1,3,6,9,12]

export function calculateHistory(historyArr, currentPressure) {
    let historyValues = [];
    historyValues.push({
        name: "now",
        value: currentPressure
    });
    if (historyArr.length > 0) {
        let historyArrSorted = historyArr.sort(sortByDate);       
        HISTORY_HOURS.forEach(i => {
            historyValues.push(
                {
                    name: -i,
                    value: historyArrSorted[i-1].value
                }
            )
        })
    }

    return historyValues;
}

