import { User } from '../models/v1/user';

export async function setOffset(id, param) {
	let data = {
		offset: param
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function setURL(id, param) {
	let data = {
		url: param
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function setFacultie(id, param) {
	let data = {
		facultie: param
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function setCollege(id, param) {
	let data = {
		college: param
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function setCount(id, param) {
	let data = {
		count: param
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function setLanguage(id, param) {
	let data = {
		language: param
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function getUserAll() {
	const user = User.find({});

	return user;
}

export async function getUserById(id) {
	const user = User.find({ id: id });

	return user;
}

export async function modifyUserById(id, from, to, utcTimeAndDate) {
	let data = {
		station: {
			from: from,
			to: to,
			time: utcTimeAndDate
		}
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function updateUserById(id) {
	let data = {
		id: id
	};

	const user = User.findOneAndUpdate({ id: id }, data, { new: true });

	return user;
}

export async function createNewUser(id) {
	const user = new User({ id: id });

	const help = await getUserById(id);

	if (help.length === 0) {
		user.save();
		return user;
	} else {
		updateUserById(id);
	}
}
