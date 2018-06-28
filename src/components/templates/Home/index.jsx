// @flow
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    message: string
};

function Home(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            {message}
            <br />
            <Link to="/away">Go Away</Link>
        </div>
    );
}

export default Home;
