import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

const navigateMock = vi.fn();

describe("Testa o componente de Login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("Deve ter um título escrito 'Sign In'", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", {
      name: "Sign In",
    });

    expect(title).toBeInTheDocument();
  });

  test("Deve ter dois inputs na minha tela", async () => {
    render(<Login />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  test("Deve ter um botão na minha tela", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Login");
  });

  test("Deve ter um input para a senha", async () => {
    render(<Login />);

    const inputPassword = await screen.findByPlaceholderText(
      "Insira sua senha"
    );

    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve ter um input para a senha", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Deve ter haver um link para a página de Sign Up", async () => {
    render(<Login />);

    const link = await screen.findByText("Não tem cadastro? Clique aqui!");

    expect(link).toBeInTheDocument();
  });
});
