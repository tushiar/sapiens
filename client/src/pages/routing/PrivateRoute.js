import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
// const PrivateRoute = ({
//   element: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isAuthenticated && !loading ? (
//         <Navigate to="/login" replace={true} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );
 const PrivateRoute = ({ children , isAuthenticated,auth}) => {
  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
const mapStateToProps = (state) => ({
  auth:state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
