import React from 'react';
import Item from './Item';

const Menu = (props) => {
    let menu= props.data
    let categories = Object.keys(menu)

    

	return (
        <div class="menu">
            <div class="secao">
                {categories.map(category=>(
                    <>

                    <div class="titulo">{menu[category].slug}</div>
                    <div class="opcoes pratos">
                        {menu[category].items.map(item=>(
                            <Item data={item}/>
                         ))}
                    </div>

                    </>
                    
             
                ))}
            </div>
        </div>
	);
};

export default Menu;
