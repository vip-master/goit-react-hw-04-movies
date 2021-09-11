import React, { Suspense }  from 'react'
import Header from '../Components/header/Header.js'
import Main from '../Components/main/Main.js'
import Loader from '../Components/loader/Loader.js'


function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <Header />
            <Main />
        </Suspense>
    )
}

export default App
