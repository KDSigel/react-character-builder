import React from 'react'

export default function CatchPhrase({newCatchphrase, setNewCatchphrase, handleClick}) {
    return (
        <div>
            <label>
            <p>Add a catch phrase:
                <input
                type='text'
                value={newCatchphrase}
                onChange={(e) => setNewCatchphrase(e.target.value)} />
                <button type='button' onClick={handleClick}>Add</button>
            </p>
            </label>
        </div>
    )
}
