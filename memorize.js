/*
*
*备忘函数
 */

const memorize = fn => {
	const cache = {}
	return function(...rest) {
		const key = JSON.stringify(rest)
		return cache[key] || (cache[key] = fn.apply(fn, rest))
	}
}

var fn = memorize(function(...rest){
	console.log('计算中')
	return [...rest].reduce((total, next) => {
		return total + next
	})
})

console.log(fn(1,2,4))
console.log(fn(1,2,4))