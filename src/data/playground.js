export const gettingStarted = `
const onClick = ({ event, props }) => console.log(event,props);

// create your menu first
const MyAwesomeMenu = () => (
    <Menu id='menu_id'>
       <Item onClick={onClick}>Lorem</Item>
       <Item onClick={onClick}>Ipsum</Item>
       <Separator />
       <Item disabled>Dolor</Item>
       <Separator />
       <Submenu label="Foobar">
        <Item onClick={onClick}>Foo</Item>
        <Item onClick={onClick}>Bar</Item>
       </Submenu>
    </Menu>
);

const App = () => (
    <div>
        <MenuProvider id="menu_id" style={{ border: '1px solid purple', display: 'inline-block' }}>
            Right click me...
        </MenuProvider>
        <MyAwesomeMenu />
    </div>
);
render(<App />);
`;

export const disabledItem = `
const isDisabled = ({ event, props }) => true;

const MyMenu = () => (
<Menu id='menu_id'>
  <Item>Ipsum</Item>
  <Separator />
  <Item disabled>I'm disabled</Item>
  <Item disabled={isDisabled}>I'm disabled using a function</Item>
</Menu>
);

const App = () => (
  <div>
      <MenuProvider id="menu_id" component="span">
          Right click me...
      </MenuProvider>
      <MyMenu />
  </div>
);

render(<App />);
`;

export const disabledSubmenu = `
const isDisabled = ({ event, props }) => true;

const MyMenu = () => (
<Menu id='menu_id'>
  <Item>Foo</Item>
  <Separator />
  <Submenu label="Submenu" disabled>
    <Item>Bar</Item>
  </Submenu>
  <Separator />
  <Submenu label="Still disabled" disabled={isDisabled}>
    <Item>Baz</Item>
  </Submenu>
</Menu>
);

const App = () => (
  <div>
      <MenuProvider id="menu_id" component="span">
          Right click me...
      </MenuProvider>
      <MyMenu />
  </div>
);

render(<App />);
`;

export const customArrow = `
const MyMenu = () => (
<Menu id='menu_id'>
  <Item>Foo</Item>
  <Separator />
  <Submenu label="Unimenu" arrow="🦄">
    <Item>Bar</Item>
  </Submenu>
</Menu>
);

const App = () => (
  <div>
      <MenuProvider id="menu_id" component="span">
          Right click me...
      </MenuProvider>
      <MyMenu />
  </div>
);

render(<App />);
`;

export const menuProvider = `
const MyMenu = () => (
  <Menu id='menu_id'>
    <Item>Foo</Item>
  </Menu>
);

const CustomComponent = ({ children, ...rest  }) => (
  <aside {...rest}>
     <div>
         {children}
     </div>
  </aside>
);

const App = () => (
  <>
  {/* Html Tag */}
  <MenuProvider id="menu_id" component="span">
    I used a span tag
  </MenuProvider>
  <hr/>

  {/* Component */}
  <MenuProvider id="menu_id" component={CustomComponent}>
    I used a component
  </MenuProvider>
  <hr/>

  {/* Render props */}
  <MenuProvider id="menu_id" render={({ children, ...rest  }) => ( 
    <h2 {...rest}>
          {children}
  </h2>)}>
    I used a render props
  </MenuProvider>

  <MyMenu />
</>
);

render(<App />);
`;

export const youDontNeedTheMenuProvider = `
const square = {
  x: 50,
  y: 50,
  width: 100,
  height: 100
};

const menuId = 'awesome';

const MyMenu = ({ menuId, drawBox }) => (
  <Menu id={menuId}>
    <Item onClick={() => drawBox('blue')}>
      <span>🔷</span>
      Turn box to blue
    </Item>
    <Item onClick={() => drawBox('red')}>
      <span>🛑</span>
      Turn box to red
    </Item>
    <Item onClick={() => drawBox()}>
      <span>🔄</span>
      Reset
    </Item>
  </Menu>
);

class Canvas extends React.Component{
  constructor(props){
    super(props);
    this.drawBox = this.drawBox.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  componentDidMount() {
    this.drawBox();
  }

  drawBox(color= 'black'){
    const ctx = this.canvasRef.getContext('2d');
    ctx.clearRect(square.x, square.y, square.width, square.height);
    ctx.fillStyle = color;
    ctx.fillRect(square.x, square.y, square.width, square.height);
  }

  // Here come the magic
  handleContextMenu(e) {
    // always prevent default behavior
    e.preventDefault();

    const rect = this.canvasRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Some logic
    if (
      x >= square.x &&
      x <= square.x + square.width &&
      y >= square.y &&
      y <= square.y + square.height
    ) {
      // Don't forget to pass the id and the event and voila!
      contextMenu.show({
        id: menuId,
        event: e,
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Only the square can trigger the event</h2>
        <canvas
          onContextMenu={this.handleContextMenu}
          ref={ref => this.canvasRef= ref}
          width="200"
          height="200"
          style={{ border: '2px dashed purple' }}
        >
          this is a canvas
        </canvas>
        <MyMenu menuId={menuId} drawBox={this.drawBox} />
      </div>
    );
  }
}

render(<Canvas />)
`;

export const theOnClickEventHandler = `
const onClick = ({ event, props }) => {
  alert(JSON.stringify({ 
    x: event.clientX, 
    msg: props.msg 
  }, null, 2)
    );
}

const MyMenu = () => (
  <Menu id='menu_id'>
    <Item onClick={onClick}>Click Me</Item>
  </Menu>
  );

  function handleEvent(e){
    e.preventDefault();
    contextMenu.show({
      id: 'menu_id',
      event: e,
      props: {
        msg: 'hello'
      }
    });
  }
  
  const App = () => (
    <span onContextMenu={handleEvent}>
      Right click me...
      <MyMenu />
    </span>
  );
  render(<App />);
`;

export const leStyle = `
// try to use theme.light and animation.pop for instance

const MyMenu = () => (
  <Menu id='menu_id' theme={theme.dark} animation={animation.zoom}>
    <Item>Copy</Item>
    <Separator />
    <Item>Paste</Item>
    <Item>Cut</Item>
  </Menu>
  );
  
  const App = () => (
    <div>
        <MenuProvider id="menu_id" component="span" >
            Right click me...
        </MenuProvider>
        <MyMenu />
    </div>
  );
  
  render(<App />);
`;

export const contextMenuShow = `
const menuId = 'thisIsAnId';

const MyMenu = () => (
  <Menu id={menuId}>
    <Item>Copy</Item>
    <Separator />
    <Item>Paste</Item>
    <Item>Cut</Item>
  </Menu>
  );

  const handleEvent = e => {
    e.preventDefault();
    contextMenu.show({
      id: menuId,
      event: e,
      props: {
        foo: 'bar'
      }
    });
  };

  const divStyle = { 
    width: '100px',
    height: '100px',
    border: '1px solid purple'
  };
  
  const App = () => (
    <div>
        <div onContextMenu={handleEvent} style={divStyle}>
            Right click me...
        </div>
        <MyMenu />
    </div>
  );
  
  render(<App />);
`;
