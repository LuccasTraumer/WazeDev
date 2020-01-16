import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }){
  
    const[longitude,setLongitude] = useState('');
    const [latitude,setLatitude] = useState(''); 
    const [techs,setTechs] = useState('');
    const[github_username,setGithubUsername] = useState('');

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition( // Vai pegar a localização do usuario
            (position) => {
                const {latitude , longitude} = position.coords;

                setLatitude(latitude)
                setLongitude(longitude)
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
      },[])

    async function handlerSubmit(event){
        event.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
            
        });
        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handlerSubmit}>

            <div className="input-block">
              <label htmlFor="github_username">Usuario do Github</label>
              <input 
              name="github_username" 
              id="username_github" 
              required
              value={github_username}
              onChange={event => setGithubUsername(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input 
              name="techs" 
              id="techs" 
              required
              value = {techs}
              onChange={event => setTechs(event.target.value)}
              />
            </div>
            
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={event => setLatitude(event.target.value)}
                />
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={event => setLongitude(event.target.value)}
                />
              </div>
            </div>
            <button type="submit"> Salvar</button>
          </form>
    );
}
export default DevForm;