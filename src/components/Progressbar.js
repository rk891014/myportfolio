import React from 'react'

function Progressbar({title,value}) {
    return (
        <div style={{marginTop : 20}} >
        <div class="progress" style={{height : 30}}>
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
         aria-valuemin="0" aria-valuemax="100" style={{"width": value}}>

          <h4 class="title" >{title}</h4>
          </div>
          </div>
        </div>
    )
}

export default Progressbar