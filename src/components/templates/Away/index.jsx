// @flow
import React from "react";

type Props = {
    message: string
};

function Away(props: Props) {
    const { message }: { message: string } = props;
    return <div>{message}</div>;
}

export default Away;
