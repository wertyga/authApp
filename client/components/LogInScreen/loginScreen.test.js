import { LogInScreen } from './LogInScreen';
import ConnectLogScreen from './LogInScreen';
import { loginUser, registration } from '../../actions/auth';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { initialState } from '../../reducers/user';

const mockStore = configureStore([thunk]);

describe('#LoginScreen component', () => {
    it('Check initial state', done => {
        const wrapper = shallow(<LogInScreen />);

        expect(wrapper.state().username).toEqual('');
        expect(wrapper.state().password).toEqual('');
        expect(wrapper.state().errors).toEqual({});
        expect(wrapper.state().loading).toEqual(false);

        done()
    });

    it('Check error input fields, when require fields empty', done => {
        const wrapper = shallow(<LogInScreen />);

        wrapper.find('#login').simulate('click', {preventDefault: () => {}});
        expect(typeof wrapper.state().errors).toEqual('object'); 
        expect(wrapper.state().errors).toHaveProperty('username');
        expect(wrapper.state().errors).toHaveProperty('password');

        wrapper.find('#usernameInput').simulate('change', {
            target: {
                name: 'username',
                value: 'my username'
            }
        });
        expect(wrapper.state().username).toEqual('my username');
        wrapper.find('#login').simulate('click', {preventDefault: () => {}});
        expect(wrapper.state().errors).toHaveProperty('password');

        wrapper.find('#passwordInput').simulate('change', {
            target: {
                name: 'password',
                value: 'my password'
            }
        });
        wrapper.setState({ username: ''})
        expect(wrapper.state().password).toBe('my password');
        wrapper.find('#login').simulate('click', {preventDefault: () => {}});
        expect(wrapper.state().errors).toHaveProperty('username');

        done();
    });

    it("Check that component didn't change while require fields are empty", done => {
        const wrapper = shallow(<LogInScreen />);
        const tree = renderer.create(<LogInScreen />).toJSON();
        wrapper.find('#login').simulate('click', {preventDefault: () => {}});

        expect(tree).toMatchSnapshot();

        done();
    });

    it('Check that loading present, when submit and all is need to be disabled are disabled', done => {
        const wrapper = mount(<LogInScreen />);

        wrapper.setState({ username: 'asd', password: 'asdasd'});
        wrapper.find('#login').simulate('click', {preventDefault: () => {}});
        wrapper.find('button').forEach((node, index) => expect(node.prop('disabled')).toEqual(true));
        wrapper.find('input').forEach((node, index) => expect(node.prop('disabled')).toEqual(true));
        expect(wrapper.state().loading).toBe(true);
        // expect(wrapper.find('Loading').length).toEqual(1);
console.log(renderer.create(<LogInScreen />).toJSON())
        done();
    });

});