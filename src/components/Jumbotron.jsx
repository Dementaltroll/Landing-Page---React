function Jumbotron(props) {

    return <div className="jumbotron" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
    <h1 className="display-4" style={{ padding: '5px' }}>Hello, world!</h1>
    <p className="lead" style={{ padding: '5px' }}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p className="lead" style={{ padding: '5px' }}>
        <a className="btn btn-primary btn-lg" href="#" role="button" style={{ margin: '10px' }}>Learn more</a>
    </p>
</div>
}



export default Jumbotron;