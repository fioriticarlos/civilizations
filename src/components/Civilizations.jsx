import React from 'react'
import {Link} from "react-router-dom";

const Civilizations = () => {

    const [list, setList] = React.useState([])

    React.useEffect( () => {
        fetchData()
    }, [] )

    const fetchData = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const dataJSON = await data.json()
        setList(dataJSON.civilizations)
    }

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Civilizations obtained by API</p>

                    {
                        list.map(item => (
                            <div key={item.id} className="notification">
                                <div className="columns">
                                    <div className="column is-11">
                                        <span className="has-text-weight-bold">{item.name}</span> - {item.army_type}
                                    </div>
                                    <div className="column is-1">
                                        <Link className="button is-primary" to={`/civilization/${item.id}`}>
                                            show
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                
                </div>
            </section>
        </div>
    )
}

export default Civilizations
