function foo({ message }) {
	return async (req, res) => {
		res.status(200).json({ success: true, message });
	};
}

module.exports = { foo };
