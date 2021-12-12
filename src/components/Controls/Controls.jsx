import React from 'react'

export default function Controls({
    head, 
    setHead,
    torso,
    setTorso,
    legs,
    setLegs,
}) {

const headOptions = ['Fry', 'MemeMan', 'ShibaInu']
const torsoOptions = ['Aladdin', 'Homer', 'Spidey']
const legsOptions = ['SkateObama', 'SpongeBob', 'SpiderLegs']

    return (
        <div>
            <label>
                <p>Head 
                    <select onChange={(e) => setHead(e.target.value)} value={head}>
                        {headOptions.map((headOption) => (
                            <option value={headOption} key={headOption}>{headOption}</option>
                        ))
                        }
                    </select>
                    </p>
            </label>
            <label>
                <p>Torso 
                    <select onChange={(e) => setTorso(e.target.value)} value={torso}>
                        {torsoOptions.map((torsoOption) => (
                            <option key={torsoOption}>{torsoOption}</option>
                        ))
                        }
                    </select>
                    </p>
            </label>
            <label>
                <p>Legs 
                    <select onChange={(e) => setLegs(e.target.value)} value={legs}>
                        {legsOptions.map((legsOption) => (
                            <option key={legsOption}>{legsOption}</option>
                        ))
                        }
                    </select>
                    </p>
            </label>
        </div>
    )
}
