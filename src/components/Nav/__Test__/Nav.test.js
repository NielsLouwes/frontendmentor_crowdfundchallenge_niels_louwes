/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Nav from '../Nav'

describe('Nav component', () => {
    it('renders crowdfund logo/text', () => {
        render(<Nav />)
        const logoCrowdfund = screen.getByRole('heading', {  name: /crowdfund/i})
        expect(logoCrowdfund).toBeInTheDocument();
        // screen.debug();
    })

    it('renders About link', () => {
        render(<Nav />)
        const aboutNavigation = screen.getByText(/about/i);
        expect(aboutNavigation ).toBeInTheDocument();
        // screen.debug();
    })

    it('renders Discover link', () => {
        render(<Nav />)
        const dicoverNavigation = screen.getByText(/discover/i);
        expect(dicoverNavigation).toBeInTheDocument();
        // screen.debug();
    })

    it('renders shopping cart component', () => {
        render(<Nav />)
        const cartComponent = screen.getByTestId("cart-test-id");
        expect(cartComponent).toBeInTheDocument();
        // screen.debug();
    })

    it('renders the shopping cart modal when shopping cart icon is clicked on', async () => {
        render(<Nav handleOpen={true}/>)
        const cartComponent = screen.getByTestId("cart-test-id");
        expect(cartComponent).toBeInTheDocument();
        fireEvent.click(cartComponent);
        const modalComponent = await screen.findByText(/your cart is empty\./i)
        expect(modalComponent).toBeInTheDocument();
    })
}) 
    