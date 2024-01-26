import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@nextui-org/react";
import MangaItem from "./Components/MangaItem";
function App() {

	return (

		<>
			<div>
				<div>
					<input />
          <Button color="primary">aaaButton</Button>
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
