import { ToastContainer } from 'react-toastify';

export const ContNotification = () => {
  return (
    <ToastContainer 
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      draggable={false}
      closeOnClick = {true}
      pauseOnHover = {true}
    />
  );
}