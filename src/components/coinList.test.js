import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import CoinLists from './coinLists'



describe('CoinLists Component', () => {
    test('renders img of the crypto coins', () => {
        // Arrange
        render(<CoinLists/>);
    
        // Act
        // Assort
        const img= screen.getByRole('img');
        expect(img).toBeInTheDocument();
    
    })
    
})