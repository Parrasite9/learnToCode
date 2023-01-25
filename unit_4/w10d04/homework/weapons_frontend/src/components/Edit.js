import {useState, useEffect} from 'react'

const Edit = (props) => {

    // let emptyWeapon = {name: '', century: '', gender_specific: '' }

    const [weapon, setWeapon] = useState({...props.weapon})

    const handleChange = (e) => {
        setWeapon({...personalbar, [e.target.name]: e.target.value})
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdate(weapon)
      }

    return (
        <>
            <details>
                <summary>Edit Weapon</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type = 'text' name = 'name' value = {weapon.name} onChange = {handleChange} />
                    <br />
                    <br />
                    <label htmlFor='century'>Century: </label>
                    <input type='text' name = 'century' value={weapon.century} onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor='gender_specific'>Gender Specific: </label>
                    <input type = 'text' name='gender_specific' value={weapon.gender_specific} onChange={handleChange} />
                    <input type='submit'/>
                </form>
            </details>
        </>
    )
}

export default Edit