import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import Main from './pages/main/main'
import Error from './templates/404'
import BubbleSort from './pages/main/sort'

export default function Routing(){
    const location = useLocation()
    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Main/>} />
            <Route path='/bubblesort' element={<BubbleSort/>} />
            <Route path='*' element={<Error/>}/>
        </Routes>
    </AnimatePresence>
    )
}