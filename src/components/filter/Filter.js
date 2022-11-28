import { useDispatch } from 'react-redux';
import { filterContscts } from 'redux/contacts/filterSlice';
import { InputField, Lable, Contacts, BlockFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputData = e => {
    const typedData = e.target.value;
    dispatch(filterContscts(typedData));
  };

  return (
    <BlockFilter>
      <Contacts>Contacts</Contacts>
      <Lable>
        Find contacts by name
        <InputField type="text" name="filter" onChange={inputData} />
      </Lable>
    </BlockFilter>
  );
};
