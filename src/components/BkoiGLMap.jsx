import React from 'react'

// import { Map } from 'bkoi-gl'
import * as bkoigl from 'bkoi-gl'
// Import Styles

const ACCESS_TOKEN = 'Mjg5MTpGMDNaTU1HTjZU'
const STYLES = 'https://gozayaan.map.barikoi.com/styles/barikoi/style.json'
class BkoiGLMap extends React.PureComponent {
    state = {
        map: null
    }

    componentDidMount(){
        // Create Map Instance
        this._createMap()
    }

    // Create Map
    _createMap = () => {
        const map = new bkoigl.Map({
            container: 'map',
            center: [ 0, 0 ],
            zoom: 12,
            accessToken: ACCESS_TOKEN,
            style: STYLES
        })

        this.setState({ map })
    }

    render() {
        return(
            <div 
                id='map'
                style={{
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden'
                }}
            >

            </div>
        )
    }
}

export default BkoiGLMap