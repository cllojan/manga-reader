import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import MangaItem from "./Components/MangaItem";

function App() {

	return (

		<>
			<main className='container'>
				<div className="inputs_container">
					<input type="text" id="search" placeholder='Buscar manga'/>					
					<div className="select" >
						<input type="text" className='textBox' id="genders" placeholder='Generos'/>
						<div className="option">
							<div className="">Accion</div>
							<div className="">Aventura</div>
						</div>
					</div>					
					<div className="select" >
						<input type="text" className='textBox' id="genders" placeholder='Generos'/>
						<div className="option">
							<div className="">Accion</div>
							<div className="">Aventura</div>
						</div>
					</div>	
					<div className="select" >
						<input type="text" className='textBox' id="genders" placeholder='Generos'/>
						<div className="option">
							<div className="">Accion</div>
							<div className="">Aventura</div>
						</div>
					</div>	
				</div>
				<div className='mangas_container'>
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />					
				</div>
			</main>
		</>
	)
}

export default App
