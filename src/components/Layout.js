import { AppBar } from "components/appBar/AppBar"
import {Outlet} from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
    return <div>
        <AppBar />
        <Suspense fallback={null}>
        <Outlet />
        </Suspense>
    </div>
}