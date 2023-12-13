const container = document.getElementById('react-container');
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
ReactDOM.render(React.createElement(Container),container);