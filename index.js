// Your code here

function createEmployeeRecord(arr){
    return{
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr){
    return arr.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(name, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    name.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date
    })
    return name

}

function createTimeOutEvent(name, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    name.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date
    })
    return name

}

function hoursWorkedOnDate(name, workDate){
    let clockIn = name.timeInEvents.find(function(e){
        return e.date === workDate
    })

    let clockOut = name.timeOutEvents. find(function(e){
        return e.date === workDate
    })

    return (clockOut.hour - clockIn.hour) / 100
}

function wagesEarnedOnDate(name, workDate){
    let wages = hoursWorkedOnDate(name, workDate) * name.payPerHour
    return parseFloat(wages.toString())
}

function allWagesFor(name){
    let dates = name.timeInEvents.map(function(days){
        return days.date
    })
    let wages = dates.reduce((p, d) => p + wagesEarnedOnDate(name, d), 0)
    return wages
}

function calculatePayroll(arr){
    let payroll = arr.reduce((p, d) => p + allWagesFor(d), 0)
    return payroll
}

function findEmployeeByFirstName(arr, firstName){
    let name = arr.find(n => n.firstName === firstName)
    return name
}