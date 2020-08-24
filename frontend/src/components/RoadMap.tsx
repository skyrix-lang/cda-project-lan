import React, { FunctionComponent } from "react";
import { H4, H5 } from "@blueprintjs/core";
import { observer } from "mobx-react";

export const RoadMap: FunctionComponent = observer(() => {

    return (
        <div>
            <H4>
                - Feuille de route -
            </H4>

            <H5>Ma première note</H5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>

            <H5>Ma deuxième note</H5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>
        </div>
    );
});
