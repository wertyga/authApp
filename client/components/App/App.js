import { Switch, Route } from 'react-router-dom';

import LogInScreen from '../LogInScreen/LogInScreen';
import SuccessLogin from '../SuccessLogin/SuccessLogin';
import UpperMenu from '../UpperMenu/UpperMenu';
import NotFoundPage from '../404/404';

import './App.sass';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <UpperMenu />
                <Switch>
                    <Route path="/" exact component={LogInScreen}/>
                    <Route path="/user/:id" component={SuccessLogin}/>

                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;



