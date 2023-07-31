import { Container } from "react-bootstrap";
import FormMain from "./components/FormMain";

export default function App() {
  return (
    <>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className="mt-5">
        <FormMain />
      </Container>
    </>
  )
}

