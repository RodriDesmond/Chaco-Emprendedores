import React from 'react'
import { Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Login } from '../login';

import { authAtom } from '../_state';

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useRecoilValue(authAtom);
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                // not logged in so redirect to login page with the return url
                //return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                return <Route path="/login" element={<Login />} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}