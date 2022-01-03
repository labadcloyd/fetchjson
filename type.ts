function sampleTypes() {
	interface Profile {
		name: string,
		id: number,
		details: { age: number, height: number, nickname: string },
		isSingle: boolean,
		birthday: Date,
		favoriteFood: string[]
	}

	const name: string = 'Cloyd Abad'
	const details: { age: number, height: number, nickname: string } = { age: 20, height: 168, nickname: 'cloycloy'}
	const id: number = 48
	const single: boolean = false
	const favoriteFood: string[] = ['fries', 'chicken', 'chocolate']
	const birthday: Date = new Date('03 30 2001')


	const cloydProfile: Profile = {
		name,
		details,
		id,
		isSingle: single,
		birthday,
		favoriteFood,
	}

	// annotating the function variable
	const printNumber: (i:number) => void = (i: number): void => {
		console.log(i)
	}
	// annotating function
	function add(a: number, b: number): number {
		return a + b
	}

	// annotating destructured objects
	const weather: {day: string, temp: number} = {
		day: 'Monday',
		temp: 24
	}
	const {day, temp} : {day: string, temp: number} = weather
	// Annotating destructred objects inside functions
	function logWeather({day, temp}: {day: string, temp: number}) {
		console.log(day)
		console.log(temp)
	}
	
	/* When to use annotations */
	// 1. functions that return type any
	const json = '{"x": 3, "y": 4}'
	const coordinates: {x: number, y: number} = JSON.parse(json)

	// 2. when declaring a variable and initialing it later
	const colors = ['red', 'orange', 'green']
	let foundGreen: boolean;

	for (let i = 0; i < colors.length; i++) {
		if (colors[i] === 'green') {
			foundGreen = true
			console.log(foundGreen)
		}
	}

	// 3. when declaring a variable that cannot be inferred properly
	let numbers = [-21, -0, 12]
	let numberAboveTen: number | Boolean = false

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > 10) {
			numberAboveTen = numbers[i]
			console.log(numberAboveTen)
		}
	}	

	return cloydProfile

}

console.log(sampleTypes())