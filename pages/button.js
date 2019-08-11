import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_IN, loginAction, logoutAction } from '../reducers/user'

const Home = () => {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.user)
    const loginClick = useCallback(() => {
        dispatch(loginAction)
    })
    const logoutClick = useCallback(() => {
        dispatch(logoutAction)
    })

    return (
        <div>
            <button onClick={loginClick}>로그인</button>
            <button onClick={logoutClick}>로그아웃</button>
            로그인 상태 { isLoggedIn ? '로그인중' : '로그아웃중' }
        </div>
    )
}

export default Home
