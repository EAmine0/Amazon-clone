import React from 'react'
import './Home.css'
import amazonbanner from './amazon-banner.jpg'
import amazonecho from './amazon-echo-dot-2018.png'
import book2 from './book2.PNG'
import oled from './oled-tv.png'
import work from './workbook.png'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
            className='home_banner'
            src={amazonbanner}
            alt='Amazon Banner'/>

            <div className='home_row'>
                <Product 
                    title={'VISION - Drap Housse 90 x 190 cm - Coloris: Anthracite - 100% Coton: 57 Fils - 4 Coins élastiques'} 
                    price={'12.99'} 
                    image={amazonecho}/>
                <Product 
                    title={'Ksipze Led Chambre 10M Bluetooth App pour ContrôLer la Ruban Led en Synchronisation avec la Musique Lumière Led Décorative Multicolore, Bande Led, Dimmable avec Télécommande, Ruban Auto-adhésif'} 
                    price={'19.99'} 
                    image={book2}/>

            </div>

            <div className='home_row'>
                <Product 
                    title={'HP 302 Cartouche d Encre Noire Authentique (F6U66AE)'} 
                    price={'15.99'} 
                    image={oled}/>
                <Product 
                    title={'Montre Connectée Homme Femme 1.69" Smartwatch Sport Moniteur de Fréquence Cardiaque Sommeil Montre Intelligente Podometre Calories, Etanche IP68 Chronometre GPS Partagé 24 Modes Sport pour Android iOS'} 
                    price={'120'} 
                    image={work}/>
                <Product 
                    title={'Montre Connectée Homme Femme 1.69" Smartwatch Sport Moniteur de Fréquence Cardiaque Sommeil Montre Intelligente Podometre Calories, Etanche IP68 Chronometre GPS Partagé 24 Modes Sport pour Android iOS'} 
                    price={'7'} 
                    image={book2}/>

            </div>

            <div className='home_row'>
                <Product 
                    title={'Montre Connectée Homme Femme 1.69" Smartwatch Sport Moniteur de Fréquence Cardiaque Sommeil Montre Intelligente Podometre Calories, Etanche IP68 Chronometre GPS Partagé 24 Modes Sport pour Android iOS'} 
                    price={'34'} 
                    image={book2}/>

            </div>


        </div>
    </div>
  )
}

export default Home