import { connect } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import './UpperMenu.sass';

class UpperMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user || {}
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.props.user !== prevProps.user) {
            this.setState({
                user: this.props.user
            });
        };
    };

    render() {
        const login = (
            <div className="login">
                <span>No user</span>
            </div>
        );
        const logout = (
            <div className="logout">
                <span>User: </span>
                <span>{this.state.user.username}</span>
            </div>
        );
        return (
            <div className="UpperMenu">
                <div className="wrapper">
                    {isEmpty(this.state.user) ? login : logout}
                </div>
            </div>
        );
    };
};

UpperMenu.propTypes = {
    user: PropTypes.object.isRequired, //User data from user-reducer
};

const mapState = state => {
    return {
        user: state.user
    };
};

export default connect(mapState)(UpperMenu);