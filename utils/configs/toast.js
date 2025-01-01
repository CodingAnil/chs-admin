import toast from "react-hot-toast";

export const toastMessage = (type, message, config = { duration: 2500 }) => {
  const toastConfig = {
    ...config,
    id: message,
    position: 'top-right',
  };
  switch (type) {
    case "error":
      return toast.error(message, { message, toastConfig });
    case "success":
      return toast.success(message, { message, toastConfig });
    default:
      return toast(message, { message, toastConfig });
  }
};
