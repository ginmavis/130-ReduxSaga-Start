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
	if (success) {
		toast.success(success);
	}
};
// // c2
// export  const toastSuccess = (message)=>{
// 	if(message !== null && typeof message !== 'undefined' && message != ''){
// 		toast.success(message)
// 	}
// }
