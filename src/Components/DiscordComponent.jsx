import React from "react";

class DiscordComponent extends React.Component {
    componentDidMount() {
        window.location.assign('https://discord.gg/fjkauFJ3jB')
    }

    render() {
        return (
            <h1>Redirecting you to Discord...</h1>
        );
    }
}

export default DiscordComponent;