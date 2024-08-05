'use client'

import { RecoilRoot, atom } from 'recoil'

const isClient = typeof window !== 'undefined'

export const loadingState = atom({
    key: 'loadingState',
    default: false,
})

export default function RecoidContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <RecoilRoot>{children}</RecoilRoot>
}