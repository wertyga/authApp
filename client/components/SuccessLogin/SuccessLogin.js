import { connect } from 'react-redux';

import { getUserData } from '../../actions/auth';

import Loading from '../../common/components/Loading';

class SuccessLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user || {},
            loading: true,
            errors: ''
        };
    };

    componentDidMount() {
        this.props.getUserData(this.props.match.params.id)
            .then(res => {
                this.setState({ loading: false});
            })
            // .catch(err => {
            //     console.log(err.response.data)
            //     if(err.response && err.response.data.redirectUrl) {
            //         this.props.history.push(err.response.data.redirectUrl);
            //     } else {
            //         this.setState({
            //             loading: false,
            //             errors: err.response ? err.response.data.errors : err.message
            //         });
            //     }
            // })
    };

    render() {

        const main = (
            <div className="content">
                Content
            </div>
        );

        return (
            <div className="SuccessLogin">
                {this.state.errors && <div className="error">{this.state.errors}</div>}

                {this.state.loading ? <Loading /> : main}
            </div>
        );
    };
};

SuccessLogin.propTypes = {
    user: PropTypes.object.isRequired, //User data from user-reducer
    getUserData: PropTypes.func.isRequired, //Fetch user data for dispatch
};

function mapState(state) {
    return {
        user: state.user
    }
};

export default connect(mapState, { getUserData })(SuccessLogin);