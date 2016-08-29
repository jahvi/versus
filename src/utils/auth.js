import { firebaseAuth } from './firebase';

function authRouteResolver(nextState, replace, callback) {
  return firebaseAuth.onAuthStateChanged(
    user => {
      const { pathname } = nextState.location;

      if (!user && pathname !== '/') {
        replace({ pathname: '/' });
      } else if (user && pathname === '/') {
        replace({ pathname: '/rooms' });
      }

      callback();
    }
  );
}

export default authRouteResolver;
