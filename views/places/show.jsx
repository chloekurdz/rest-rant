const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            let sumRatings = data.place.comments.reduce((tot, c) => {
                return tot + c.stars
            }, 0)
            let averageRating = Math.round(sumRatings / data.place.comments.length)
            let stars = ''
            for (let i = 0; i < averageRating; i++) {
                stars =+ '*'
            }
            rating = (
                <h3>
                    {stars} stars
                </h3>
            )
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!': 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h2>
                            Rating
                        </h2>
                        {rating}
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>
                    <div className="col-sm-6">
                        <h2>Comments</h2>
                        { comments }
                        
                    </div>
                    <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" id="content" name="content" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Star Rating</label>
                        <input className="form-control" id="stars" name="stars" type="number" />
                    </div>
                    <div>
                        <label htmlFor="rant">Rant</label>
                        <input id="rant" name="rant" type="checkbox" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show