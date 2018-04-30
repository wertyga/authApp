import axios from 'axios';

import inputsValidation from '../../../server/middlewares/inputsValidation';

import Loading from '../../common/components/Loading';

import './LogInScreen.sass';

export class LogInScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            errors: {},
            loading: false
        };
    };

    onChange = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
            errors: {
                ...this.state.errors,
                [name]: ''
            }
        });
    };

    Submit = e => {

        const sendObject = {
            username: this.state.username,
            password: this.state.password
        };
        const { isValid, errors } = inputsValidation(sendObject);

        if(isValid) {
            this.setState({ loading: true, errors: {}});
            const login = e.target.getAttribute('id') === 'login';
            const url = login ? '/auth/login' : '/auth/sign-up';

            return axios.post(url, { ...sendObject })
                .then(res => this.props.history.push(`/user/${res.data.id}`))
                .catch(err => {
                    err = err.response ? err.response.data.errors : { globalError: err.message };
                    this.setState({
                        errors: err,
                        loading: false
                    });
                })

        } else {
            this.setState({
                errors
            })
        }
    };

    render() {
        return (
            <div className="LogInScreen">
                <div className="form">
                    {this.state.errors.globalError && <div className="error">{this.state.errors.globalError}</div>}
                    {this.state.loading  && <Loading />}
                    <label htmlFor="usernameInput">Username:</label>
                    <input type="text" name="username" placeholder="Username..."
                           value={this.state.username} onChange={this.onChange} id="usernameInput"
                           disabled={this.state.loading}
                    />
                    {this.state.errors.username && <div className="error">{this.state.errors.username}</div>}

                    <label htmlFor="passwordInput">Password:</label>
                    <input type="text" name="password" placeholder="Password..."
                           value={this.state.password} onChange={this.onChange} id="passwordInput"
                           disabled={this.state.loading}
                    />
                    {this.state.errors.password && <div className="error">{this.state.errors.password}</div>}

                    <button className="primary"
                            disabled={this.state.loading || !this.state.username || !this.state.password}
                            onClick={this.Submit}
                            id="login"
                    >
                        Login
                    </button>
                    <button id="registration"
                            className="primary"
                            disabled={this.state.loading}
                            onClick={this.Submit}
                    >
                        Registration
                    </button>
                </div>
            </div>
        );
    };
};

export default LogInScreen;
