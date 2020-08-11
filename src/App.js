import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header.js';
// import MovieList from './components/MovieList.js';
import CreateProfile from './components/CreateProfile';
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';

const movies = [
	{
		title: "titanic",
		description: "blablabla",
	},
	{
		title: "simba",
		description: "blablabla"
	},
	{
		title: "little mermaid",
		description: "blablabla"
	}
];

class App extends React.Component {

	state = {
		fields: {},
	}
	onSubmit = (fields) => {
		this.setState({fields})
	} 
	render() {
		return (
			<div>
				{/* <Header/> */}
				{/* <MovieList moviesProps={movies}/> */}
				{/* <MovieInfo/> */}
				{/* <logIn/> */}
				<LogIn onSubmit ={fields => this.onSubmit(fields)}/>
			<p>{
			JSON.stringify(this.state.fields, null, 2)}
			</p>
				{/* <SignUp/> */}
			</div>
		)
	}
}

export default App;