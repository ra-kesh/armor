import { MemoryRouter } from "react-router-dom";
import { render, screen } from "../src/test/test.utils";
import HomeComponent from "./view/Home/Home.component";
import Products from "./view/Products/Products.component";
import ProductDetailComponent from "./view/ProductDetail/ProductDetail.component";
import { vi } from "vitest";
import { AuthProvider } from "./context";
import { Login, Signup } from "./view";

const isAuthenticated = vi.fn();

describe("App", () => {
  it("renders home page by default", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomeComponent />
      </MemoryRouter>
    );
  });

  it('renders products page when navigating to "/products"', () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <Products />
      </MemoryRouter>
    );
  });

  it("renders the product details based on the provided product ID", async () => {
    const productId = "1";

    render(
      <MemoryRouter initialEntries={[`/products/${productId}`]}>
        <ProductDetailComponent />
      </MemoryRouter>
    );
  });

  it("renders the Login component when navigating to '/login'", () => {
    isAuthenticated.mockReturnValue(false);
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  it("renders the Signup component when navigating to '/signup'", () => {
    isAuthenticated.mockReturnValue(false);

    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <AuthProvider>
          <Signup />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });
});
