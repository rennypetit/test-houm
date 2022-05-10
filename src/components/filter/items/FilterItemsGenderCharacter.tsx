import Select from 'react-select';
import { genderCharacter } from './dataFilterCharacter';

const FilterGenderCharacter = ({
	handleSelectCharacter,
}: React.ComponentProps<typeof Object>) => {
	return (
		<Select
			aria-label='-1'
			instanceId='gender'
			name='gender'
			onChange={handleSelectCharacter}
			options={genderCharacter}
			placeholder='gender'
		/>
	);
};

export default FilterGenderCharacter;
