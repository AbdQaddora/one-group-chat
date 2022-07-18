import React from 'react'
import InfoHeader from './InfoHeader'
import MessageBar from './MessageBar'

export default function Home() {
    return (
        <div className='bg-light' style={{ minHeight: "100vh" }}>
            <InfoHeader />
            <MessageBar />
        </div>
    )
}
