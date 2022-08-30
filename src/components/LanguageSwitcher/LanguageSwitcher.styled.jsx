import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select)`
  width: 32px;
  height: 32px;
  z-index: 120;
  left: 55px;
  bottom: 2px;
  .react-select__control {
    cursor: pointer;
    background-color: transparent;
    border: none;

    &--is-focused {
      outline: none;
      border-bottom-color: ${props => props.theme.MAIN_COLOR};
      box-shadow: none;
    }
  }
  .react-select__indicators {
    display: none;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__value-container {
    padding: 0 2px 0 2px;
    z-index: 110;
  }
  .react-select__menu {
    width: 44px;
    background: ${props => props.theme.SELECT_CONTAINER_COLOR};
    color: ${props => props.theme.SELECT_PLACEHOLDER_COLOR};
  }
  @media screen and (min-width: 768px) {
    left: 40px;
  }
  @media screen and (min-width: 1280px) {
    left: 315px;
  }
`;
