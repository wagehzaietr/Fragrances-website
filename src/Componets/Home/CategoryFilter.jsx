import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CategoryFilter = ({ setFilterByGender, filterByCategory }) => {
  const [activeButton, setActiveButton] = useState(
    localStorage.getItem('activeButton') || 'all'
  );

  // Handle button click event
  const handleButtonClick = (gender) => {
    setActiveButton(gender);
    setFilterByGender(gender);
  };

  useEffect(() => {
    localStorage.setItem('activeButton', activeButton);
  }, [activeButton]);

  return (
    <BtnWrapper>
      <Button
        active={activeButton === 'all'}
        onClick={() => handleButtonClick('')}
      >
        All Products
      </Button>
      <Button
        active={activeButton === 'men'}
        onClick={() => handleButtonClick('men')}
      >
        Men
      </Button>
      <Button
        active={activeButton === 'women'}
        onClick={() => handleButtonClick('women')}
      >
        Women
      </Button>
    </BtnWrapper>
  );
};

// Styles
const BtnWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  color: #f3f3f3;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  margin: 0 0.8rem;
  text-transform: capitalize;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  background-color: ${({ active, theme }) =>
    active ? theme.colors.btn_color : 'transparent'};
  &:focus {
    background-color: ${({ theme }) => theme.colors.btn_color};
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.btn_color};
  }
`;

export default CategoryFilter;
