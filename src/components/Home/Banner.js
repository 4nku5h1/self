export default function Banner({ uid }) {
    return (
        <div className='home page' id={uid}>
            <div className='container text-banner'>
                <h2>Welcome to Pixobrew,</h2>
                <h2>Where we breathe life</h2>
                <h2>into your visuals for an </h2>
                <h2>ever-evolving world.</h2>
            </div>
            
            {/* <div className='banner'>
                <img src={backg} />
            </div> */}
        </div>

    )
}