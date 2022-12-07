// Convert to POJO
export const CPOJOs = (obj) => {
	return structuredClone(obj);
};

// Count Down Timer
export const CDT = (date) => {
	let timer = setInterval(() => {
		let dueToGo;
		let now = new Date().getTime();
		let distance = new Date(date).getTime() - now;

		let d = Math.floor(distance / (1000 * 60 * 60 * 24));
		let h = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
		let m = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
		let s = Math.floor(distance % (1000 * 60)) / 1000;

		dueToGo = `${d}D ${h}H ${m}M ${s}S`;

		if (distance < 0) {
			clearInterval(timer);
			dueToGo = 'Expired';
		}

		return dueToGo;
	}, 1000);
};

// Due To Go
export const DTG = (date, type, formatted = true) => {
	const today = new Date();
	const due = new Date(nextPreservation(date, type));
	const distance = due - today;
	const day = Math.ceil(distance / 86400000);

	if (!formatted) {
		return day;
	}

	if (day < 0) {
		return `Expired since ${-day} days ago`;
	} else {
		return `Valid until ${day} days ahead`;
	}
};

// Day to Milisecond
export const DTMs = (day) => {
	return isNaN(day) ? console.log('DTMs: input not a number') : day * 86400000;
};

// Next Preservation Date
export const nextPreservation = (date, type, formatted = false) => {
	let next = new Date(date).getTime() + DTMs(type);
	if (formatted) {
		return dateFormat(next);
	} else {
		return next;
	}
};

// Date Formatter - Input Millisecond
export const dateFormat = (ms) => {
	let dayString = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
	let monthString = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	let date = new Date(ms);
	let format = {
		year: date.getFullYear(),
		month: monthString[date.getMonth()],
		date: date.getDate(),
		day: dayString[date.getDay()]
	};

	return `${format.day}, ${format.date} ${format.month} ${format.year}`;
};
