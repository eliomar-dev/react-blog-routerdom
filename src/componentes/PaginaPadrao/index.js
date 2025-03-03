import Banner from "componentes/Banner";
import { Outlet } from "react-router";

export default function PaginaPadrao(){
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}