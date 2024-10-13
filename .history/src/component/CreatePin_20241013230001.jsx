import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createPin } from '../redux/productSlice';
import toast, { Toaster } from 'react-hot-toast';

const CreatePin = () => {
    const [error, setError] = useState('');
    const [getInput, setGetInput] = useState();
    const userInfoPin = useSelector((state) => state.personalBanking.userInfo.pin);
    const userInfoSession = useSelector((state) => state.personalBanking.userInfo.session);
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
           
            <Toaster />
        </>

    );
};

export default CreatePin;
