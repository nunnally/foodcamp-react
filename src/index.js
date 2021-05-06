import ReactDOM from 'react-dom' 
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu/Menu'

const App = () => {
  
    const menu ={
        entradas:{

            slug:"Primeiro, seu prato",
            items:[
                {
                name:"Croquete de costela",
                description:"com emsulsão de chimichurri.",
                price:22,
                },
                {
                name:"Cogumelos frescos",
                description:"com abobrinha, tomatinhos, terra verde e coalhada.",
                price:25,
                },
                {
                name:"Pescada Curada",
                description:"ao molho veloute de cebola e oleo de cebolinha.",
                price:21,
                }
            ]

        },
        mains:{

            slug:"Agora, seu prato principal",
            items:[
                {
                name:"Bife Ancho na Brasa",
                description:"mix de legumes e batatas coloridos, saladinha de baby leaf, pimentão braseado e molho da casa de chimichurri.",
                price:59,
                },
                {
                name:"Camarada Camarão",
                description:"fettuccine com camarão, molho branco, limão siciliano, queijo parmesão e azeite de cebolinha.",
                price:69,
                },
                {
                name:"Tuna de Saburó",
                description:"atum selado ao molho dashi zuu, purê de cenoura, granola salgada, sunomono de cajuzinho, gel de limão e alho poró frito.",
                price:21,
                }
            ]
        },
        desserts:{

            slug:"Por fim, sua sobremesa",
            items:[


                {
                name:"Texturas de chocolate",
                description:"twist de chocolate, sorvete da vovó, croc branco, financier de cacau, tuile, crumble de chocolate, flor de sal e toque de azeite.",
                price:27,
                },
                {
                name:"Azedou!",
                description:"creme de limão, biscoito amanteigado de de gengibre, telha de suspiro, cupuaçu e gel de limão.",
                price:27,
                },
                {
                name:"Pudim do Vovô",
                description:"pudim de café, cumaru e crumble.",
                price:21,
                }
            ]

        }

    }     
        

    return (
    <>
        <Header/>
        <Menu data={menu}/>
        <Footer/>
    </> 
    )
}
ReactDOM.render(<App/>,document.querySelector(".root"))