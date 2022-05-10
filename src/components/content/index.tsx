import { useCallback, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

import { CharactersContext } from '@contexts/CharacterContext';
import { GetCharactersInfinityScroll } from '@API/GetCharacters';
import CardPost from '@components/card';
import { TypesContent } from './types';
import { TypeGetCharacterResponse } from '@types/globalTypes';

import styles from './Content.module.scss';

const Content = () => {
	const { characterData, setCharacterData } = useContext(CharactersContext);
	const { ref, entry } = useInView({
		threshold: 0.9,
	});

	const handleChangeDataCharacter = useCallback(async (): Promise<
		void | string
	> => {
		if (!characterData.info.next) return ''; // se acabaron las páginas
		const responseCharacter: TypeGetCharacterResponse | null =
			await GetCharactersInfinityScroll(characterData.info.next);

		if (!responseCharacter) return setCharacterData(null); // se actualiza el state y muestra un mensaje de no encontrado en los cards

		// se crea un nuevo objeto se concatena y actualiza el state
		const dataCharacter = {
			info: responseCharacter.info,
			results: characterData.results.concat(responseCharacter.results),
		};
		setCharacterData(dataCharacter);
	}, [entry?.isIntersecting]);

	// se llama el intersection observer para actualizar el state
	if (entry?.isIntersecting) handleChangeDataCharacter();
	return (
		<>
			<h2 className='subTitle'>
				<span>Personajes</span>
			</h2>
			<div className={styles.cards}>
				{characterData.results.map((data: TypesContent, index: number) => (
					<CardPost data={data} key={index} />
				))}
			</div>
			<div ref={ref} className={styles.observer}></div>
		</>
	);
};

export default Content;
