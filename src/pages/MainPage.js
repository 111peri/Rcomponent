import {Component} from 'react';
import BlogList from "../components/BlogList";
import BlogEntry from "../components/BlogEntry";


class MainPage extends Component {

    render() {
        return (
            <div>

                <BlogList/>
                <BlogEntry/>
            </div>
        );
    }
}
export default MainPage;