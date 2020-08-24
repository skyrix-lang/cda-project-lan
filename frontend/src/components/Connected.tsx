import React, {FunctionComponent, useState} from "react";
import { ctx } from "../services/Context";
import { observer } from "mobx-react";
import { OurToaster } from "./OurToaster";
import { H2 } from "@blueprintjs/core";
import { Intent } from "@blueprintjs/core/lib/esm/common/intent";
import { Schedule } from "./Schedule";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import {RoadMap} from "./RoadMap";
import {Skills} from "./Skills";
import {Calendar} from "./Calendar";

export const Connected: FunctionComponent = observer(() => {

//#region states
  const [menu, setMenu] = useState(<Schedule/>);
//#endregion

//#region functions
  function username(): string {
    return `Signed in as ${ctx.store.getName()}`;
  }

  function logout(): void {
    ctx.store.setName("");
    ctx.store.setRole("");
    OurToaster.show({
      message: "Successfully disconnected.",
      intent: Intent.SUCCESS,
      timeout: 8000
    });
  }
//#endregion

  return (
    <div>
      <Navbar className="nav-bar">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading className="title-primary">{username()}</NavbarHeading>
          <NavbarDivider />
          <Button
              className={"outline-style-d " + Classes.MINIMAL}
              onClick={() => setMenu(<Schedule/>)}
              icon="timeline-events"
              text="Emploi du temps"
          />
          <Button
              className={"outline-style-d " + Classes.MINIMAL}
              onClick={() => setMenu(<RoadMap/>)}
              icon="map"
              text="Feuille de route"
          />
          <Button
              className={"outline-style-d " + Classes.MINIMAL}
              onClick={() => setMenu(<Skills/>)}
              icon="tick-circle"
              text="Compétences"
          />
          <Button
              className={"outline-style-d " + Classes.MINIMAL}
              onClick={() => setMenu(<Calendar/>)}
              icon="calendar"
              text="Calendrier"
          />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarDivider />
          <Button
            className={"outline-style-d " + Classes.MINIMAL}
            onClick={() => logout()}
            icon="log-out"
            text="Log-out"
          />
        </NavbarGroup>
      </Navbar>
      <H2>Livret d'apprentissage numérique</H2>
      {menu}
    </div>
  );
});
