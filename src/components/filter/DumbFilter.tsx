import FilterItemsStatusCharacter from './items/FilterItemsStatusCharacter';
import FilterItemsSpeciesCharacter from './items/FilterItemsSpeciesCharacter';
import FilterItemsTypeCharacter from './items/FilterItemsTypeCharacter';
import FilterItemsGenderCharacter from './items/FilterItemsGenderCharacter';

import styles from './Filter.module.scss';
const DumbFilter = ({
	handleSelectCharacter,
}: React.ComponentProps<typeof Object>) => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>Filters</p>
			<div className={styles.row}>
				<FilterItemsStatusCharacter
					handleSelectCharacter={handleSelectCharacter}
				/>
				<FilterItemsSpeciesCharacter
					handleSelectCharacter={handleSelectCharacter}
				/>
				<FilterItemsTypeCharacter
					handleSelectCharacter={handleSelectCharacter}
				/>
				<FilterItemsGenderCharacter
					handleSelectCharacter={handleSelectCharacter}
				/>
			</div>
		</div>
	);
};

export default DumbFilter;
