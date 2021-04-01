import jwt from 'jsonwebtoken';

export default class JWT {
	sign(secret) {
		const token = jwt.sign({ secret }, process.env.SECRET, {
			expiresIn: 360,
		});

		return { auth: true, token: token };
	}
	verify(token, id) {
		jwt.verify(token, process.env.SECRET, (err, decoded) => {
			if (err) {
				return { auth: false, message: 'Failed to authenticate token.' };
			}

			id = decoded.id;
		});
	}
}
