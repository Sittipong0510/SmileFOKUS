import './Total.css'

function Total(){
    return (<>
    <h3>Yearly Member</h3>
    <div className='totalBar'>
        <div className='totalMember'>
            <div>
                Total
                <span>Member</span>
            </div>
            <div>Total
                <span>Rev.</span>        
                <span id='unit'>(THB)</span>
            </div>

        </div>
        <div className='totalTier'>
            <div id='tier'>tttt</div>
            <div>
                Total
                <span>Member</span>
            </div>
            <div>Total
                <span>Rev.</span>        
                <span id='unit'>(THB)</span>
            </div>
        </div>
    </div>
    </>
    )
}



export default Total