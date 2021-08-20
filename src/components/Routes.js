import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';
import Masks from './Masks';
import Cart from './Cart';
import Profile from './Profile';
import SingleMask from './SingleMask';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/masks' component={Masks} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/profile' component={Profile} />
      <Route
        path='/maskDetails'
        render={(routeProps) => <SingleMask {...routeProps} />}
      />
      <Route component={Masks} />
    </Switch>
  );
};

export default Routes;
