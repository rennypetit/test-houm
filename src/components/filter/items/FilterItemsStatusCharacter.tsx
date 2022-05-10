import Select from 'react-select';
import { statusCharacter } from './dataFilterCharacter';

const FilterStatusCharacter = ({
	handleSelectCharacter,
}: React.ComponentProps<typeof Object>) => {
	return (
		<Select
			aria-label='-1'
			instanceId='status'
			name='status'
			onChange={handleSelectCharacter}
			options={statusCharacter}
			placeholder='Status'
		/>
	);
};

export default FilterStatusCharacter;
