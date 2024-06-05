import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConfigurationList } from "./configuration/ConfigurationList";
import { ConfigurationCreate } from "./configuration/ConfigurationCreate";
import { ConfigurationEdit } from "./configuration/ConfigurationEdit";
import { ConfigurationShow } from "./configuration/ConfigurationShow";
import { ArchitectureList } from "./architecture/ArchitectureList";
import { ArchitectureCreate } from "./architecture/ArchitectureCreate";
import { ArchitectureEdit } from "./architecture/ArchitectureEdit";
import { ArchitectureShow } from "./architecture/ArchitectureShow";
import { HardwareList } from "./hardware/HardwareList";
import { HardwareCreate } from "./hardware/HardwareCreate";
import { HardwareEdit } from "./hardware/HardwareEdit";
import { HardwareShow } from "./hardware/HardwareShow";
import { AdditionalSettingsList } from "./additionalSettings/AdditionalSettingsList";
import { AdditionalSettingsCreate } from "./additionalSettings/AdditionalSettingsCreate";
import { AdditionalSettingsEdit } from "./additionalSettings/AdditionalSettingsEdit";
import { AdditionalSettingsShow } from "./additionalSettings/AdditionalSettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"QEMUConfigurator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Configuration"
          list={ConfigurationList}
          edit={ConfigurationEdit}
          create={ConfigurationCreate}
          show={ConfigurationShow}
        />
        <Resource
          name="Architecture"
          list={ArchitectureList}
          edit={ArchitectureEdit}
          create={ArchitectureCreate}
          show={ArchitectureShow}
        />
        <Resource
          name="Hardware"
          list={HardwareList}
          edit={HardwareEdit}
          create={HardwareCreate}
          show={HardwareShow}
        />
        <Resource
          name="AdditionalSettings"
          list={AdditionalSettingsList}
          edit={AdditionalSettingsEdit}
          create={AdditionalSettingsCreate}
          show={AdditionalSettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
