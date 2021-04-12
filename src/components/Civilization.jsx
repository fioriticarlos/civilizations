import React from 'react'
import { useParams, useHistory } from 'react-router'

const Civilization = () => {

    const {id} = useParams()

    const [civilization, setCivilization] = React.useState([])
    const [bonus, setBonus] = React.useState([])

    const history = useHistory()

    React.useEffect( () => {

        const fetchData = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const dataJSON = await data.json()
            setCivilization(dataJSON)
            setBonus(dataJSON.civilization_bonus)
        }

        fetchData()
    }, [id] )

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">
                        {civilization.name}
                    </p>
                    <p className="block">
                        <div className="block">
                            <span className="has-text-weight-bold">Army type:</span> {civilization.army_type}
                        </div>
                        <div className="block">
                            <span className="has-text-weight-bold">Team bonus:</span> {civilization.team_bonus}
                        </div>
                        <span className="has-text-weight-bold">Civilization bonus:</span> 
                        <div className="box">
                            {
                                bonus.map(item => (
                                    <div className="block">
                                        - {item}
                                    </div>                                
                                ))
                            }
                        </div>
                    </p>
                    <div className="columns">
                        <div className="column is-1">
                            <button onClick={() => history.goBack()} className="button is-primary column-2">Back</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Civilization
