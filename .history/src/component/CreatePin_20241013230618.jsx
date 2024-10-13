import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createPin } from '../redux/productSlice';
import toast, { Toaster } from 'react-hot-toast';

const CreatePin = () => {
    const [error, setError] = useState('');
    const [getInput, setGetInput] = useState();
    const userInfoPin = useSelector((state) => state.personalBanking.userInfo?.pin);
    const userInfoSession = useSelector((state) => state.personalBanking.userInfo?.session);
    console.log(userInfoSession);
    // dispatch
    const dispatch = useDispatch();
    // navigate
    const navigate = useNavigate();

    const pinHandler = (event) => {
        event.preventDefault();
        if (getInput.length < 5) {
            setError('Pin must be exactly 5 digits long and contain only numbers.');
            setGetInput('')
        } else {
            setError('');
            dispatch(createPin({
                pin: getInput,
                session: 'Yes'
            }))
            toast.success('Pin Created Successfully');
            setGetInput('')
            /* navigate('/dashboard') */
        }
    };

    //login pin
    const loginPin = (event) => {
        event.preventDefault();
        if (getInput == userInfoPin && userInfoSession == 'Yes') {
            navigate('/dashboard')
        } else {
            setError('Wrong Pin');
            navigate('/')
        }
    };



    return (
        <>
            {
                !userInfoPin && userInfoSession == undefined ? <div>
                    <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                        Set Pin Code
                    </p>
                    <form onSubmit={pinHandler} className="max-w-sm mx-auto">
                        <input
                            type="number"
                            id="number-input"
                            name="number"
                            onChange={(event) => setGetInput(event.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter a 5-digit PIN"
                            value={getInput}
                            required
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <button
                            type="submit"
                            className="rounded-[5px] px-5 py-[13px] bg-dark dark:bg-dark-2 text-base font-medium text-white mt-5"
                        >
                            Create Pin
                        </button>
                    </form>
                </div>
                    :
                    // login
                    <div>
                        <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                            Login Your Wallet
                        </p>
                        <form onSubmit={loginPin} className="max-w-sm mx-auto">
                            <input
                                type="number"
                                id="number-input"
                                name="number"
                                onChange={(event) => setGetInput(event.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter a 5-digit PIN"
                                value={getInput}
                                required
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            <button
                                type="submit"
                                className="rounded-[5px] px-5 py-[13px] bg-dark dark:bg-white dark:text-dark-2 text-base font-medium text-white mt-5"
                            >
                                Login Pin
                            </button>
                        </form>
                    </div>
            }
            <Toaster />
        </>

    );
};

export default CreatePin;
