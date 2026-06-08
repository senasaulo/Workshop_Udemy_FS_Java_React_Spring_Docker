import {toast} from 'react-toastify';

export const UseNotification = () => {
    function notify(message: string, level: 'success' | 'error' | 'info' | 'warning' | 'default' = 'default') {
        toast(message, {
            type: level
        })
    }
    return { notify };
}