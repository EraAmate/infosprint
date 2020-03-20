import styled from '@emotion/styled'

const Button = styled.button`
  border: 2px solid black;
  background-color: ${props => props.theme.colors.bgBtn};
  color: ${props => props.theme.colors.textBtn};
  height: 70px;
  width: 300px;
  margin-top: 20px;
  font-size: 1.6rem;
  font: 20px Phosphate;
`

export default Button
