import React from "react";
import { Todolist } from "./Todolist";
import { Navbar } from "./Navbar";
import { Card } from "./Img/Card";

//create your first component
const Home = () => {
	return (
		<>
		
			<Navbar />
			<Card />
			<Todolist />
		</>
	);
};

export default Home;