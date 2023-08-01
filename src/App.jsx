import { Container } from "react-bootstrap";
import FormMain from "./components/FormMain";
import ListDrinks from "./components/ListDrinks";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

export default function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <FormMain />

          <ListDrinks />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}
