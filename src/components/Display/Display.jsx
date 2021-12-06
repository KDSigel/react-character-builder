import React from 'react'

export default function Display({allCatchphrases}) {
    return (
        <div>
            Catchphases: {allCatchphrases.map((oneCatchphrase, i) => (
                <div key={oneCatchphrase + i}>{oneCatchphrase}</div>
            ))}
        </div>
    )
}
