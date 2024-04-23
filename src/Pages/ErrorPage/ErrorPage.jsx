import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ErrorPage = () => {
    useEffect(() => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are in the wrong way or We are currently implementing this functionality.',
            showCancelButton: true,
            confirmButtonText: 'Go to Home',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the home page or any desired location
                window.location.href = '/';
            }
        });
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <p className='font-semibold text-xl'>Oops! We couldn&apos;t find what you were looking for.</p>
                <Link to='/'>
                    <button className="btn btn-warning pb-0 mb-0 mt-4">Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
