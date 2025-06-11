import { styled } from 'styled-components';

export const ButtonCustom = styled.button<{ $isActive: boolean }>`
  padding: 16px;
  width: 100%;
  background-color: ${({ $isActive }) => $isActive === true ? 'red' : 'blue'};
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;