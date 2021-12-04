import React from 'react'

export default function Display({allCatchphrases}) {
    return (
        <div>
            Catchphases: {allCatchphrases.map((oneCatchphrase) => (
                <div key={oneCatchphrase}>{oneCatchphrase}</div>
            ))}
        </div>
    )
}
