import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Navbar from './Navbar';
import {ThemeContext} from './context/ThemeContexts';

test('renders the navbar', () => {
    render(
        <ThemeContext.Provider value={{ theme: true, toggleTheme: jest.fn() }}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </ThemeContext.Provider>
    );
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
});

test("cart button present in the navbar",()=>{
    render(<ThemeContext.Provider value={{ theme: true, toggleTheme: jest.fn() }}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
        </ThemeContext.Provider>)

        const myCart = screen.getByRole("link", {name:/my cart/i})
        expect(myCart).toBeInTheDocument();
})

test("searchbar present in the nav",()=>{
    render(<ThemeContext.Provider value={{ theme: true, toggleTheme: jest.fn() }}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
        </ThemeContext.Provider>)

        const searchbar = screen.getByPlaceholderText(/Search for products/i);
        expect(searchbar).toBeInTheDocument();
})

test("if the logo have an svg",()=>{
    render(<ThemeContext.Provider value={{ theme: true, toggleTheme: jest.fn() }}>
    <MemoryRouter>
        <Navbar />
    </MemoryRouter>
</ThemeContext.Provider>)

const logoImg = screen.getByAltText(/store/i);
expect(logoImg).toBeInTheDocument();
expect(logoImg).toHaveAttribute("src",expect.stringMatching(/logo.*\.svg$/))
})

