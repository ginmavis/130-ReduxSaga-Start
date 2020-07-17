import { toast } from "react-toastify";

export const toastError = (error) => {
	let message = null;
	if (typeof error === "object" && error.message) {
		message = error.message;
		// ({message} = error)
	}
	// if(message !== null && message !== 'undefined' && message !== "")
	if (message) {
		toast.error(message);
	}
};

export const toastSuccess = (success) => {
	toast.success(success);
};
