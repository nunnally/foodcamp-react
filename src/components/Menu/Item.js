import React from 'react';


const Item = (props) => {
    let item= props.data

	return (
        
        <div class="opcao">
            <img src="img/frango_yin_yang.png" />
            <div class="titulo">{item.name}</div>
            <div class="descricao">Um pouco de batata, um pouco de salada</div>
            <div class="preco">{item.price}</div>
            <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
            </div>
      </div>
	);
};

export default Item;
