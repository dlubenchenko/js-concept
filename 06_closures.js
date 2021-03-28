// function sayHello(name) {
// 	const message = 'Hello ' + name

// 	return function () {
// 		console.log(message)
// 	}
// }

// const helloToElena = sayHello('Elena')
// const helloToIgor = sayHello('Igor')

// helloToElena()
// helloToIgor()

// function createFrameworkManager() {
// 	const fw = ['Angular', 'React']

// 	return {
// 		print: function () {
// 			console.log(fw.join(' '))
// 		},

// 		add: function (framework) {
// 			fw.push(framework)
// 		},
// 	}
// }

// const manager = createFrameworkManager()
// console.log(manager)
// manager.print()
// manager.add('VueJS')
// manager.print()

// settimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
	;(function (j) {
		setTimeout(function () {
			console.log(`Fib[${j}] = ${fib[j]}`)
		}, 1500)
	})(i)
}
