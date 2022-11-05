import { CategoriesList, ItemListContainer, Footer } from "../layout";

export const Menu = () => {
    return(<>
        <main>
            <CategoriesList categories={['nigiri', 'sashimi']}/>
            <ItemListContainer/>
        </main>
        <Footer/>
    </>)
};