import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import PropTypes from 'prop-types';
import { shallow, render, mount } from 'enzyme';
import renderer from 'react-test-renderer';

global.shallow = shallow;;
global.render = render;
global.mount = mount;
global.React = React;
global.renderer = renderer;
global.PropTypes = PropTypes;
// Обрушим тест при любой ошибке
console.error = message => {
    console.log(message)
    // throw new Error(message);
};

configure({ adapter: new Adapter() });
