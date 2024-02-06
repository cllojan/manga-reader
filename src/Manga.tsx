import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { useParams } from "react-router-dom"
import MangaItem from "./Components/MangaItem";

function App() {	
	const params = useParams<{code:string, name:string}>();
	return (

		<>
			<main className='container'>
				<h1>{params.code}:{params.name}</h1>
			</main>
		</>
	)
}

export default App
