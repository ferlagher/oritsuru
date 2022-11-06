import { CategoriesList, ItemListContainer, Footer } from "../../layout";
import { useMenu } from './useMenu'

export const Menu = () => {
    const [isLoading, items] = useMenu();

    return(<>        
        <main>
            <CategoriesList categories={Object.keys(items)}/>
            <ItemListContainer isLoading={isLoading} items={items}/>
        </main>
        <Footer/>
    </>)
};