import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import RouteUrl from '@constants/router'
import NotFoundPage from '@pages/not-found'
import HomePage from '@pages/home'
import AuthRouteConfig from '@navigator/route-configs/auth-route-config'
import AuthRoute from './auth-route'

const renderRoutes = (routes: any, RouteWrapper: any) =>
  routes.map(
    ({ path, title, isPublic, component, exact = true, ...props }: any) => (
      <Route
        key={path}
        path={path}
        element={
          <RouteWrapper
            title={title}
            path={path}
            exact={exact}
            isPublic={isPublic}
            component={component}
            {...props}
          />
        }
      ></Route>
    )
  )

const AppRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={RouteUrl.HOME.ROOT} element={<HomePage />} />
        {renderRoutes(AuthRouteConfig, AuthRoute)}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  )
}

export default AppRoute
