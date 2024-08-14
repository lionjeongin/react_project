import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FormBox = styled.form`

`;

const SearchBox = ({ search, onSubmit }) => {
  const { t } = useTranslation();

  return <FormBox onSubmit={onSubmit} autoComplete='off'>
    <div>
      <select name="sopt">
        <option value="ALL"></option>
      </select>
    </div>
  </FormBox>
};

export default React.memo(SearchBox);