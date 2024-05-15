import './form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = ({addedTeamMember, teams, registerTeam}) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addedTeamMember({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className='form-container'>
            <form className="form" onSubmit={onSubmit}>
                <h2>Fill in the details to create a employee card</h2>
                <TextField
                    mandatory
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextField
                    mandatory
                    label="Position"
                    placeholder="Enter your position"
                    value={position}
                    whenChanged={value => setPosition(value)}
                />
                <TextField
                    mandatory={false}
                    label="Image"
                    placeholder="Enter the image url"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <Dropdown
                    mandatory
                    label="Team"
                    itens={teams}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button text="Create Card" />
            </form>
            <form className="form" onSubmit={(event) => {
                event.preventDefault();
                registerTeam({name: teamName, color: teamColor})
            }}>
                <h2>Create a new team</h2>
                <TextField
                    mandatory
                    label="Name"
                    placeholder="Enter team name"
                    value={teamName}
                    whenChanged={value => setTeamName(value)}
                />
                <TextField
                    mandatory
                    label="Color"
                    placeholder="Enter the color"
                    value={teamColor}
                    whenChanged={value => setTeamColor(value)}
                />
                <Button text="Create New Team" />
            </form>
        </section>
    )

}

export default Form