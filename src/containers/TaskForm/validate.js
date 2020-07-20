const validate = (values) => {
	const errors = {};
	const { title, description } = values;
	if (!title) {
		errors.title = " vui lòng nhập tiêu đề";
	} else if (title.trim().length < 5) {
		errors.title = "Tiêu đề phải từ 5 kí tự";
	}
	if (!description) {
		errors.description = " vui lòng nhập miêu tả";
	}
	return errors;
};

export default validate;
