import RouterUrl from '@constants/router'
import { lazy } from 'react'

const AuthRouteConfig = [
  {
    component: lazy(() => import('@pages/auth/login')),
    path: RouterUrl.AUTH.LOGIN,
    isPublic: true
  },
  {
    component: lazy(() => import('@pages/auth/signup')),
    path: RouterUrl.AUTH.SIGNUP,
    isPublic: true
  }
]

export default AuthRouteConfig
