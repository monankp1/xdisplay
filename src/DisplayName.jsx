import React,{useState} from 'react'

const DisplayName = () => {
    const [name, setName] = useState({firstName: '', lastName: ''});
    const [displayName, setDisplayName] = useState(false);

    const handleChange = (e) => {
        setName({
            ...name, 
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(true);
        
    };


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input
            type='text'
            name='firstName'
            value={name.firstName}
            onChange={handleChange}
            required
        />
        <br />
        <label>Last Name:</label>
        <input 
            type='text'
            name='lastName'
            value={name.lastName}
            onChange={handleChange}
            required
        />
        <br />
        <button type='submit'>Submit</button>
    </form>
    {displayName? (<p>Full Name: {`${name.firstName} ${name.lastName}`}</p>): ('')}
    </div>
    
  )
}

export default DisplayName