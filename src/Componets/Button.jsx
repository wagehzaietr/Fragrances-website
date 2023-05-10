import React from 'react'
import styled from 'styled-components';



const Button = () => {
  return (
    <Btn>
        
    </Btn>
  )
}



//styles
const Btn = styled.button`
  color: #f3f3f3;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  margin: 0 0.8rem;
  text-transform: capitalize;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.btn_color};
`;


export default Button