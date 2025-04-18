import React from 'react'
import { BrowserRouter } from 'react-router'
import { AppRouter } from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store'

export const CalendarApp = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
      </Provider>
    </>
  )
}
