import React from 'react'
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
    return props.data.map(charcter => {
    return(
        <Card key={charcter.id}>
            <Card.Content header={charcter.name} />
            <Card.Content description={'Age: ' + charcter.age} />
            <Card.Content description={'Eye Color: ' + charcter.eye_color} />
            <Card.Content description={'Gender: ' + charcter.gender} />
            <Card.Content description={'Hair Color: ' + charcter.hair_color} />
            <Card.Content extra>
            
            </Card.Content>
        </Card>
    )
    })
}

export default CharacterCard