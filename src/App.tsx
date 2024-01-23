import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import MangaItem from "./Components/MangaItem";
function App() {

	return (

		<>
			<div>
				<div>
					<input />
				</div>
				<div className='mangas__container'>
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					<MangaItem />
					
				</div>

			</div>
		</>
	)
}

export default App
