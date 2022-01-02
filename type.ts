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

	return cloydProfile

}