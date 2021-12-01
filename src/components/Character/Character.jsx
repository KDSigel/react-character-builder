import React from 'react'

export default function Character(head) {
    return (
        <>
        <div style={{
            backgroundImage: `url(${head}.png)`,
            height: 250,
            width: 788,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        <div style={{
            backgroundImage: 'url(torso-1.png)',
            height: 400,
            width: 788,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        <div style={{
            backgroundImage: 'url(legs-1.png)',
            height: 785,
            width: 788,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        </>
    )
}
