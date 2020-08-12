import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header.js';
// import MovieList from './components/MovieList.js';
import CreateProfile from './components/CreateProfile';
// import LogIn from './components/LogIn';

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
				<CreateProfile/>
				{/* <LogIn onSubmit ={fields => this.onSubmit(fields)}/> */}
			{/* <p>{
			JSON.stringify(this.state.fields, null, 2)}
			</p> */}
			</div>
		)
	}
}

export default App;