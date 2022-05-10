import CreatableSelect from 'react-select/creatable';
import { typeCharacter } from './dataFilterCharacter';

const FilterTypeCharacter = ({
	handleSelectCharacter,
}: React.ComponentProps<typeof Object>) => {
	return (
		<CreatableSelect
			aria-label='-1'
			instanceId='type'
			name='type'
			onChange={handleSelectCharacter}
			options={typeCharacter}
			placeholder='type'
		/>
	);
};

export default FilterTypeCharacter;
