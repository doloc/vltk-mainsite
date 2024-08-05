'use client'

import { useRecoilValue } from 'recoil'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { loadingState } from '../atom/atom'

const Loading = () => {
    const loading = useRecoilValue(loadingState)

    return (
        loading && (
            <div
                className="fixed top-0 left-0 z-[100] w-[100vw] h-[100vh] flex justify-center items-center"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
                <ScaleLoader color="#1677ff" />
            </div>
        )
    )
}

export default Loading
