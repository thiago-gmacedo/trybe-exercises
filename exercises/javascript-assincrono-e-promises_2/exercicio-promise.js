const fetchPromise = () => {
	const promise = new Promise((resolve, reject) => {
		let numberArr = [];

		while (numberArr.length < 10) {
			let num = (Math.random() * 50) ** 2
			numberArr.push(Math.floor(num));
		}

		const sum = numberArr.reduce((sum, number) => sum + number)

		console.log(sum);
		sum < 8000 ? resolve(sum) : reject(sum);
	})
	promise
		.then(sum => [2, 3, 5, 10].map(number => sum/number ))
		.then(console.log)
		.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};
fetchPromise();