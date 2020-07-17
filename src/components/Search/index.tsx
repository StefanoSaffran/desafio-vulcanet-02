import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

export interface IProps {
  has_background?: boolean;
}

const Search: React.FC<IProps> = ({ has_background }) => {
  return (
    <Container has_background={has_background}>
      <input type="text" />
      <FaSearch />
    </Container>
  );
};

export default Search;
