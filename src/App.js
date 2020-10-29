import React from 'react';
import './App.css';
import Info from './Component/Info/Info';
// import messages_ru from "./i18n/ru";
// import messages_en from "./i18n/en";
// import { IntlProvider } from 'react-intl';
// import SwitchLang from './Component/Switch/Switch';


class App extends React.Component {

  // state = {
  //   currentLocal: 'en',
  //   messages: {
  //     'ru': messages_ru,
  //     'en': messages_en
  //   }
  // };



  // changeLocal = (e) => {
  //   if (e) {
  //     this.setState({ currentLocal: 'en' }
  //     )
  //   } else {
  //     this.setState({ currentLocal: 'ru' })
  //   }
  // };


  render() {
    return (
      <div className="App">

        {/* <IntlProvider locale={this.state.currentLocal}
          messages={this.state.messages[this.state.currentLocal]}>
          <SwitchLang changeLocal={this.changeLocal} currentLocal={this.state.currentLocal} />
        </IntlProvider> */}
        <Info />

      </div>
    );
  }
}

export default App;
