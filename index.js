const rs = require('readline-sync')

// prompt name question
// prompt fav hobby
// ask if there's more hobbies
// add hobbies to list and store the list
// print user hobby list at the end

let hobbies = []
let areYouSure = false
let moreHobbies = 0

function getHobbyCount() {
  moreHobbies = rs.questionInt('How many other hobbies do you have? ')
}

function addHobbies(numHobbies) {
  var counter = 0

  while(counter < numHobbies) {
    var input = rs.prompt()
    hobbies.push(input)
    counter++

    if (counter < numHobbies) {
      console.log('-- Awesome! "' + input + '" is cool! What\'s the other ' + (numHobbies - counter) + '?')
    } else {
      console.log('I wish I could ' + hobbies + '...but I\'m a computer')
    }
  }
}

let userName = rs.question('What is your name? ')
let favHobby = rs.question(userName + ', what is your favorite hobby? ')

hobbies.push(favHobby)
  getHobbyCount()

// console.log(`Hi ${userName}!`)

if (moreHobbies > 0) {
  console.log('Cool, what are they?')
  addHobbies(moreHobbies)
} else {
   areYouSure = rs.keyInYN('Are you sure? ' + hobbies[0] + ' is all you like to do?')
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount()
  addHobbies(moreHobbies)
} else if (areYouSure) {
  console.log(hobbies + ' is cool, good for you.')
}

// console.log(hobbies)
