<Draggable>
  <Happy />
</Draggable>

<Draggable>
  <Sad />
</Draggable>

<Draggable>
  <Optimistic />
</Draggable>

<Draggable>
  <Fearful />
</Draggable>

<Draggable>
  <Depressed />
</Draggable>

<Draggable>
  <Worried />
</Draggable>

<Draggable>
  <Stressed />
</Draggable>

<Draggable>
  <Anxious />
</Draggable>

<Draggable>
  <Confident />
</Draggable>

<Draggable>
  <Valued />
</Draggable>

<Draggable>
  <Frustrated />
</Draggable>

<Draggable>
  <Angry />
</Draggable>




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
