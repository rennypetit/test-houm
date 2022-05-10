import { useState } from 'react';
import { CharactersContext } from '@contexts/CharacterContext';
import FilterCharacter from '@components/filter/SmartFilter';
import ContentCard from '@components/content';

const ContainerHome = ({ data }) => {
	const [characterData, setCharacterData] = useState(data);
	const [characterFilter, setCharacterFilter] = useState({
		status: '',
		species: '',
		type: '',
		gender: '',
		page: '',
	});
	return (
		<CharactersContext.Provider
			value={{
				characterData,
				setCharacterData,
				characterFilter,
				setCharacterFilter,
			}}
		>
			<menu>
				<FilterCharacter />
			</menu>
			{!characterData || characterData?.error ? (
				<h2 className='titleNotFund'>
					No se encontraron resultados <span>:(</span>
				</h2>
			) : (
				<ContentCard />
			)}
		</CharactersContext.Provider>
	);
};

export default ContainerHome;

// se creo este componente ya que si el state esta dentro del home al momento de actualizarse se vuelve a renderizar el layout, title y head.
