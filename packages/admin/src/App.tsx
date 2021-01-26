import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { routePathsState } from "./routes";

function App() {
    const paths = useRecoilValue(routePathsState);
    return (
        <Router>
            <Switch>
                {paths.map((route) => (
                    <Route
                        path={route.path}
                        component={route.component}
                        key={route.path}
                    />
                ))}
            </Switch>
        </Router>
    );
}

export default App;
