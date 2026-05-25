import {it ,expect, describe, vi} from 'vitest';
import {Product } from './Product';
import { render, screen } from '@testing-library/react';

describe('Product Component',()=>{
    it('renders product details correctly', () => {
        const product =  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-towel-set.jpg",
    name: "2 Piece Luxury Towel Set - White",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"]
  };
  const loadCart = vi.fn();
        render(<Product product={product} loadCart={loadCart} />);
       expect( 
        screen.getByText('2 Piece Luxury Towel Set - White')
       ).toBeInTheDocument();
       expect(
        screen.getByText('144')
       ).toBeInTheDocument();
       expect(
        screen.getByText('$35.99')
       ).toBeInTheDocument();
       expect(
        screen.getByTestId('product-image')
       ).toHaveAttribute('src', 'images/products/luxury-towel-set.jpg');
    });
})