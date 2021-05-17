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
    return [...drivers, name];
}

const prependDriver = function(name) {
    return [name, ...drivers];
}

const removeLastDriver = function() {
   return drivers.slice(0, drivers.length -1);
}

const removeFirstDriver = function() {
    return drivers.slice(1);
}
