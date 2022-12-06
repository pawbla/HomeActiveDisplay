const HISTORY_HOURS = [12,9,6,3,1]

export function calculateHistory(historyArr, currentPressure) {

    let historyValues = [];

    if (historyArr.length > 0) {
        let historyMap = new Map(historyArr.map(i => [i.date, i.value])); 
        
        HISTORY_HOURS.forEach(i => {           
            historyValues.push(
                {
                    name: -i,
                    value: historyMap.get(getRefDate(i))
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

const getRefDate = (i) => {
    let dateTime = new Date();
    dateTime.setMinutes(0);
    dateTime.setSeconds(0)
    dateTime.setMilliseconds(0);
    dateTime.setHours(dateTime.getHours() - i);
    return dateTime.toISOString();
}

