import { Button, EmptyState } from "../../components";

export const NotFound = () => {
    return(
        <section>
            <EmptyState>
                <Button to='/'>Volver al inicio</Button>
            </EmptyState>
        </section>
    );
};