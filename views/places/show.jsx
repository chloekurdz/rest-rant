const React = require('react')
const Def = require('../default')

function show (data) {
    let mesage = ''
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                {message}
            </main>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                Delete
                </button>
            </form>
        </Def>
        
    )
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-smm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisnes}
                        </h4>
                    </div>
                </div>
            </main>
        </Def>
    )
}



module.exports = show