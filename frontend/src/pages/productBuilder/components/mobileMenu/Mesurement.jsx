import React, { useState } from 'react'
import Details from './measurements/Details'
import Name from './measurements/Name'
import Pole from './measurements/Pole'
import Rooms from './measurements/Rooms'
import Type from './measurements/Type'

function Mesurement() {
    const [selector, setSelector] = useState(1)
    return (
        <div className="h-[30rem]">
            {
                selector === 1 && <Type setSelector={setSelector} />
            }
            {
                selector === 2 && <Rooms setSelector={setSelector} />
            }
            {
                selector === 3 && <Name setSelector={setSelector} />
            }
            {
                selector === 4 && <Pole setSelector={setSelector} />
            }
            {
                selector === 5 && <Details />
            }
        </div>
    )
}

export default Mesurement