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

	const printNumber: (i:number) => void = (i: number) => {
		console.log(i)
	}

	/* When to use annotations */
	// 1. functions that return type any
	const json = '{"x": 3, "y": 4}'
	const coordinates: {x: number, y: number} = JSON.parse(json)

	// 2. when we declare a variable and initialize it later
	const colors = ['red', 'orange', 'green']
	let foundGreen: boolean;

	for (let i = 0; i < colors.length; i++) {
		if (colors[i] === 'green') {
			foundGreen = true
		}
	}

	console.log(foundGreen)

	return cloydProfile

}

console.log(sampleTypes())