import AboutMe from '../AboutMe.js'
import Experiences from '../Experiences';
import Technologies from '../Technologies';
import Contact from '../Contact';
import { Switch, Route } from "react-router-dom";

function Content() {
    return (
        <div className="flex text-white w-full bg-gray-900">
                <Switch>
                    <Route path="/about-me">
                        <AboutMe />
                    </Route>
                    <Route path="/experiences">
                        <Experiences />
                    </Route>
                    <Route path="/technologies">
                        <Technologies />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
        </div>
    );
}

export default Content;