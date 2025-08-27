const MainProgressBar = () =>{
    return(
        <>
            <h1>Progress Bar</h1>
            <ProgressBar progress={58}/>
        </>
    );
}

const ProgressBar = ({progress}) => {
    return(
        <div role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} 
        style={{border: '1px solid black',  margin: '0px 5px 0px 5px', height: '18px', borderRadius:'10px', overflow:'hidden', position:"relative", 
        backgroundColor:'#E8E8E8'}}>
            <div style={{height:'17.7px', backgroundColor:'green', width:`${progress}%`, zIndex:'1', position:"absolute", transition: 'width 0.5s ease' }}>
                {/* <p style={{margin:'0px', padding:'0px', fontSize:'12px'}}>{progress} %</p>  */}
                {/* If you want the percentage to move with the progress bar then use the above line */}
            </div>
            <p style={{margin:'0px', padding:'0px', fontSize:'12px', zIndex:'2', position:"absolute", left:'50%', color:progress>=54 ? 'white' : 'black'}}>
                {progress} %
            </p>
        </div>
    );
}
//  We have used th position property to usr zIndex.

export default MainProgressBar;