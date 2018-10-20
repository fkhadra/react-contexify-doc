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
        <MenuProvider id="menu_id" style={{ border: '1px solid', display: 'inline-block' }}>
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