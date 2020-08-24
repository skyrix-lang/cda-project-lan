import React, { FunctionComponent, useState } from "react";
import { ctx } from "../services/Context";
import { H4, H5 } from "@blueprintjs/core";
import { observer } from "mobx-react";

export const Calendar: FunctionComponent = observer(() => {

    return (
        <div>
            <H4>
                - Calendrier -
            </H4>

            <H5>Planning alternance</H5>
            <p>
                Votre prochaine période sera une période de <i><b>cours</b></i> et s'étalera du <i><b>21/06</b></i> au <i><b>28/06</b></i>
            </p>

            <H5>Contacts</H5>
            <p>
                Maître d'apprentissage : maitreappr@gmail.com
            </p>
            <p>
                Formateur : formateur@linkedin.com
            </p>
        </div>
    );
});
