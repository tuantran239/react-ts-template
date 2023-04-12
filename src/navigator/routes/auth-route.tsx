import React, { Suspense } from 'react'

interface PropsType {
  component: React.ElementType
}

const AuthRoute = ({ component: Component }: PropsType) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Component />
    </Suspense>
  )
}

export default AuthRoute
