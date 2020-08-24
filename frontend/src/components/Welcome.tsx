import React, { FunctionComponent, useState } from "react";
import { H2, Icon, Tab, Tabs } from "@blueprintjs/core";
import { Register } from "./Register";
import { Login } from "./Login";
import {Schedule} from "./Schedule";

export const Welcome: FunctionComponent<{ default_tab: string }> = props => {
  const [tab, setTab] = useState(props.default_tab);

  return (
    <div className="body">
      <div className="welcome-all">
        <div className="fx -r center">
          <div className="curve-border">
            <H2 className="title-primary">Livret d'apprentissage numérique</H2>
            <p className="helvetica p-welcome">
              Bienvenue sur la page d'accueil du livret d'apprentissage numérique.
              Ce livret vous permet d'accéder au suivi de votre formation en apprentissage,
              avec vos différentes notes enregistrées et les contacts utiles.
            </p>
          </div>
          <div className="curve-border">
            <Tabs
              id="TabsExample"
              className="tab-indicator"
              selectedTabId={tab}
            >
              <Tab
                id="lg"
                title="Login"
                onClickCapture={() => setTab("lg")}
                panel={<Login />}
                panelClassName="test-panel"
                className="outline-style-d tab-primary"
              />
              <Tab
                id="rg"
                title="Register"
                onClickCapture={() => setTab("rg")}
                panel={<Register />}
                panelClassName="ember-panel"
                className="outline-style-d tab-primary"
              />
              <Tabs.Expander />
            </Tabs>
          </div>
        </div>
        <div>
          <Schedule/>
        </div>
      </div>
    </div>
  );
};
