import { Component } from "react";
import ReactDom from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }

    componentDidMount = () => {
        // the element created in the constructor, when the portal mounts we're going to create a new div in the portal root 
        portalRoot.appendChild(this.el);
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el);
    }

    render() {
        const { children } = this.props;
        return ReactDom.createPortal(children, this.el);
    }
}
