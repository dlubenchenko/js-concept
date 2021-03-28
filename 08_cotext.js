// const person = {
// 	surname: 'Starck',
// 	knows: function (what, name) {
// 		console.log(`You ${what} know, ${name} ${this.surname}`)
// 	},
// }

// const john = {
// 	surname: 'Snou',
// }

// person.knows('all', 'Bran')

// person.knows.call(john, 'nothing', 'John')
// person.knows.apply(john, ['nothing', 'John'])
// person.knows.call(john, ...['nothing', 'John'])
// person.knows.bind(john, 'nothing', 'John')()

// const bound = person.knows.bind(john, 'nothing', 'John')
// bound()

// function Person(name, age) {
// 	this.name = name
// 	this.age = age

// 	console.log(this)
// }

// const elena = new Person('Elena', 20)

// ============= неявний

// function logThis() {
// 	console.log(this)
// }

// const obj = { num: 42 }

// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// ========== явний

// const animal = {
// 	legs: 4,
// 	logThis: function () {
// 		console.log(this)
// 	},
// }

// animal.logThis()

// arrow function

function Cat(color) {
	this.color = color
	console.log(this)
	;(() => console.log('Arrow this', this))()
}

new Cat('red')
