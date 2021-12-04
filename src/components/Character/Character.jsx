import React from 'react'

export default function Character({head, torso, legs}) {
    return (
        <>
        <div style={{
            backgroundImage: `url(${head}.png)`,
            height: 125,
            width: 394,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        <div style={{
            backgroundImage: `url(${torso}.png)`,
            height: 200,
            width: 394,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        <div style={{
            backgroundImage: `url(${legs}.png)`,
            height: 392.5,
            width: 394,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        >
        </div>
        </>
    )
}
