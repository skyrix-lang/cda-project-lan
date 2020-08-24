import React, { FunctionComponent, useState } from "react";
import { H4, H5 } from "@blueprintjs/core";
import { observer } from "mobx-react";

export const Skills: FunctionComponent = observer(() => {

    return (
        <div>
            <H4>
                - Compétences -
            </H4>

            <p>
                Compétence 1 :   5 / 5
            </p>

            <p>
                Compétence 2 :   1 / 5
            </p>

            <p>
                Compétence 3 :   4 / 5
            </p>

            <p>
                Compétence 4 :   2 / 5
            </p>
        </div>
    );
});
