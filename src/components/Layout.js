import React from 'react'
import TacoFetcher from 'components/TacoFetcher'
import Taco from 'components/Taco'
import TacoManager from 'utils/TacoManager'

const Layout = () => {
    return (
        <main>
            <TacoFetcher>
                {({ data, loading, error }) => {
                    if (error) return <div>fug</div>
                    if (loading) return <div>Getting your taco <span role="img" aria-label="running">🏃‍♂️🏃‍♂️</span></div>

                    const taco = new TacoManager(data)
                    return <Taco taco={taco} />
                }}
            </TacoFetcher>
        </main>
    )
}

export default Layout
