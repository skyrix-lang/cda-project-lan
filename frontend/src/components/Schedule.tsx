import React, { FunctionComponent } from "react";
import { H4 } from "@blueprintjs/core";
import { observer } from "mobx-react";

export const Schedule: FunctionComponent = observer(() => {

    return (
        <div>
            <H4>
                - Emploi du temps -
            </H4>
            <table className="bp3-html-table .bp3-html-table-bordered .bp3-html-table-striped">
                <thead>
                    <tr>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Samedi</th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        <tr>Français 8h00-12h00</tr>
                        <tr>Maths 13h00-18h00</tr>
                    </td>
                    <td>
                        <tr>Anglais 8h00-12h00</tr>
                        <tr>Maths 13h00-18h00</tr>
                    </td>
                    <td>
                        <tr>Espagnol 8h00-12h00</tr>
                        <tr>Maths 13h00-18h00</tr>
                    </td>
                    <td>
                        <tr>Maths 8h00-12h00</tr>
                        <tr>Maths 13h00-18h00</tr>
                    </td>
                    <td>
                        <tr>Maths 8h00-12h00</tr>
                        <tr>Maths 13h00-18h00</tr>
                    </td>
                    <td>
                        <tr>Art plastique 8h00-12h00</tr>
                    </td>
                </tbody>
            </table>
        </div>
    );
});
