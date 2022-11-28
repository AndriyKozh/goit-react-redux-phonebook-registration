import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { refreshUser } from 'redux/auth/operation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const PhoneBook = lazy(() => import('../pages/Phonebook/Phonebook'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="content">
        <div className="emblem">
          {isRefreshing ? (
            'Fetching user data...'
          ) : (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      redirectTo="/phonebook"
                      component={RegisterPage}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      redirectTo="/phonebook"
                      component={LoginPage}
                    />
                  }
                />
                <Route
                  path="/phonebook"
                  element={
                    <PrivateRoute component={PhoneBook} redirectTo="/login" />
                  }
                />
              </Route>
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}
