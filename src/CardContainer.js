import Card from "./Card"
import React from "react"

function CardContainer({nameBirthday}) {

    const quickMap = nameBirthday.map((eachEntry) => {
        return <Card key={eachEntry.id} {...eachEntry}/>
    })

    return (
        <div>
            {quickMap}
        </div>
    )
}

export default CardContainer;
