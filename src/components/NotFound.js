import React from 'react';

const NotFound = () => {
  {/* for inline css, use camelCode */}
  var styles = {
    position:'relative',
    left: '.3em',
  }
  return(
    <header className="top">
      <h1>
        Sorry 
        <span className="ofThe">
          <span className="of">it</span>
          <span className="the" style={styles}>ain't</span>
        </span>
        Here
      </h1>
    </header>
  )
}
		
export default NotFound;