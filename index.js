// Write your solution here!

 const drivers = ['Milo', 'Otis', 'Garfield']

  const destructivelyAppendDriver = function(name) { 
      drivers.push(name) 
} 

 const destructivelyPrependDriver = function(name) {
     drivers.unshift(name)
 }

 const destructivelyRemoveLastDriver = function(name) {
    drivers.pop(name)
}

const destructivelyRemoveFirstDriver = function(name) {
    drivers.shift(name)
}

const appendDriver = function(name) {
    drivers.concat(name)
}