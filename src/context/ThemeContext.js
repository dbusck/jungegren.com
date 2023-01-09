import React from 'react';

const defaultState = {
  backgroundColor: 'black',
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
  state = {
    backgroundColor: 'black',
    introIsReady: false,
  };

  setBackgroundColor = backgroundColor => {
    this.setState({ backgroundColor });
  };

  setIntroIsReady = introIsReady => {
    // console.log('trig');
    this.setState({ introIsReady });
  };

  render() {
    const { children } = this.props;
    const { backgroundColor } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          backgroundColor,
          setBackgroundColor: this.setBackgroundColor,
          setIntroIsReady: this.setIntroIsReady,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
