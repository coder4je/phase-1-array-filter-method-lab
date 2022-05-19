// Code your solution here

const arr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function findMatching(arr, string) {
    return arr.filter(driver => 
        driver.toLowerCase() === string.toLowerCase() 
)};

function fuzzyMatch(arr, string) {
    return arr.filter(driver => driver.split('')[0] === string.split('')[0])
}

function matchName(arr, string) {
    return arr.filter(driver => driver.name === string)
}


