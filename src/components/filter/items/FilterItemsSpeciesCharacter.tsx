import CreatableSelect from 'react-select/creatable';
import { speciesCharacter } from './dataFilterCharacter';

const FilterSpeciesCharacter = ({
	handleSelectCharacter,
}: React.ComponentProps<typeof Object>) => {
	return (
		<CreatableSelect
			aria-label='-1'
			instanceId='species'
			name='species'
			onChange={handleSelectCharacter}
			options={speciesCharacter}
			placeholder='Species'
		/>
	);
};

export default FilterSpeciesCharacter;
