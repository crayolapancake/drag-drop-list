<div className="parent">
  <Container
    // key={feeling.id}
    // id={feeling.id}
    onMouseDown={(clientX, clientY) => this.handleMouseDown(clientX, clientY, 1)}

    x={translateX}
    y={translateY}
    isDragging={isDragging}
    style={{fontSize: '38px'}}
    >Happy
  </Container>
</div>


//  does not work: drags all

<Container
  onMouseDown={(clientX, clientY) => this.handleMouseDown(clientX, clientY)}
  x={translateX}
  y={translateY}
  isDragging={isDragging}>
  <div>Happy</div>
</Container>

<Container
  onMouseDown={(clientX, clientY) => this.handleMouseDown(clientX, clientY)}
  x={translateX}
  y={translateY}
  isDragging={isDragging}>
  <div>sad</div>
</Container>



<div className="parent">
  {this.state.feelings.map( (feeling, id) => {
    return <Container     //styled component
    key={feeling.id}
    id={feeling.id}

    onMouseDown={(clientX, clientY) => this.handleMouseDown(clientX, clientY, feeling.id)}

    x={translateX}
    y={translateY}
    isDragging={isDragging}
    style={{fontSize: '38px'}}
    >
    {feeling.emotion} ID:  {feeling.id}
    {children}
  </Container>
  })}
</div>
