// define all routes that a user can visit

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
  return (
    <Router>
      {/* Root scene, all routes will be children of this parent scene */}
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>

        <Scene key="main">
          <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList" component={EmployeeList} title="Employees"
          initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
