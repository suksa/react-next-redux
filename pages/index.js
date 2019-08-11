import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LOG_IN, loginAction } from '../reducers/user'

const Home = () => {
    const dispatch = useDispatch()
    // useEffect 로 즉시실행
    useEffect(() => {
        // dispatch({
        //     type: LOG_IN,
        //     data: {
        //         nickname: '제로초',
        //         apple: '사과',
        //     }
        // })
        dispatch(loginAction)
    }, [])

    return (
        <div>
            로그인 상태 {}
        </div>
    )
}

export default Home
