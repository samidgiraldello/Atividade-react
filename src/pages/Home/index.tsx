import React from "react";
import carrousel from "assets/img/carrousel.png";
import * as S from "./styles"
import dados from "services/dados";
import { CardComponent } from "../../components";

const Home = () => {
    return (
        <S.Home>
            <picture>
                <img src={carrousel} alt="Images principais"/>
            </picture>
            <aside>
                {dados && dados.map((item) => <CardComponent dados={item} />)}
            </aside>
        </S.Home>
    );
};

export default Home;
