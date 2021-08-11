export const usePop = (dataSource, fn) => {
	let pop;
	if (
		fn.toString().indexOf('09d') >= 0 ||
		fn.toString().indexOf('09n') >= 0 ||
		fn.toString().indexOf('10d') >= 0 ||
		fn.toString().indexOf('10n') >= 0
	) {
		pop = (dataSource * 100).toFixed(0) + '%';
	}

	return pop;
};