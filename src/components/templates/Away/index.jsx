// @flow
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    message: string
};

function Away(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            {message}
            <br />
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default Away;
