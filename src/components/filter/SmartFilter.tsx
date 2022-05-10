import { useRef, useContext } from 'react';
import { ActionMeta, OnChangeValue } from 'react-select';
import { CharactersContext } from '@contexts/CharacterContext';
import { GetCharactersFilter } from '@API/GetCharacters';
import { TypesCharacterData } from './items/types';
import DumbFilterCharacter from './DumbFilter';

const SmartFilter = () => {
	const { setCharacterData, characterFilter, setCharacterFilter } =
		useContext(CharactersContext);
	const canSubmitParamCharacters = useRef(false); // bandera para saber el momento de llamar a la API

	const handleSelectCharacter = (
		{ value }: OnChangeValue<TypesCharacterData, true>,
		{ name }: ActionMeta<TypesCharacterData>
	): void => {
		// se actualiza el filtro de busqueda
		setCharacterFilter({
			...characterFilter,
			[name]: value,
		});
		canSubmitParamCharacters.current = true;
	};
	if (canSubmitParamCharacters.current) {
		(async () => {
			const data = await GetCharactersFilter(characterFilter);
			setCharacterData(data);
			canSubmitParamCharacters.current = false;
		})();
	}

	return <DumbFilterCharacter handleSelectCharacter={handleSelectCharacter} />;
};

export default SmartFilter;
