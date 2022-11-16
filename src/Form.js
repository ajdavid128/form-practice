import React, {useState} from 'react';

function Form({onAddNameBirthday}) {

    // console.log(onAddNameBirthday)

    const [formData, setFormData] = useState(
    {
        name: "",
        birthday: "",
     }
    )

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((formData) => ({...formData, [name]: value }))
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddNameBirthday(formData)
        setFormData({
            name: "",
            birthday: "",
         })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add a Name and Birthday!</h3>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />

                <label>Birthday</label>
                <input
                    type="text"
                    id="birthday"
                    name="birthday"
                    onChange={handleChange}
                    value={formData.birthday}
                />
                <button type="submit" >Submit</button>
            </form>

        </div>
    )
}

export default Form;