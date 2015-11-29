import React, { Component } from 'react';
import {connect} from 'react-redux';
import
{ Toolbar,
  ToolbarGroup,
  FlatButton,
  ToolbarTitle
} from 'material-ui';

import './Menu.scss';

const styles = {
  fileInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    opacity: '0'
  },
  buttonStyle: {
    fontSize: '12px',
    display: 'inline',
    margin: '12px 0 !important'
  },
  menuStyle: {
    width: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    background: 'white',
    zIndex: '1000'
  },
  titleStyle: {
    fontSize: '12px'
  }
};

const connector = connect(function(state) {
  return (
    state
  );
}, null, null, {pure: false});

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let MenuElements = this.props.elements.map((elem) => {
      let id = elem.id ? elem.id : null;
      return (
        <FlatButton key = {elem.name}
                    className='navbar__button'
                    label = { elem.name }
                    onClick = {elem.action}
                    style = {styles.buttonStyle}
                    id={id}
        />
      );
    });

    return (
        <Toolbar style={styles.menuStyle}>
        <ToolbarGroup className='menu__button' key={0} float='left'>
        {MenuElements}
        </ToolbarGroup>
        <ToolbarGroup key={1} float='right'>
        <ToolbarTitle text= {this.props.activeFile}
                      style={styles.titleStyle}
        />
        </ToolbarGroup>
        </Toolbar>
    );
  }
}

export default connector(Menu);

Menu.propTypes = {
  elements: React.PropTypes.array.isRequired,
  activeFile: React.PropTypes.string
};

