// react router
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext';
export default function PrivateRoute() {
    const { user } = useAuthContext();
    if (user) {
        console.log(user);
        return (
            <Outlet />
        )
    }
    return <Navigate to={"/login"} />
}