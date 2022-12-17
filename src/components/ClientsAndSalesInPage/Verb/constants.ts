import { TAspectTenseVerb, TPronoun, TTenseVerb, TToBeOrNotToBe, TTypeOfSentence } from './types';

export const PAST_TENSE = 'Past';
export const PRESENT_TENSE = 'Present';
export const FUTURE_TENSE = 'Future';

export const SIMPLE_ASPECT = 'Simple';
export const CONTINUOUS_ASPECT = 'Continuous';
export const PERFECT_ASPECT = 'Perfect';
export const TO_BE_ASPECT = 'To be';

export const AFFIRMATIVE_SENTENCE = '+ Affirmative sentence';
export const NEGATIVE_SENTENCE = '- Negative sentence';
export const QUESTIONS_SENTENCE = '? Questions sentence';

export const TO_BE = 'to be';
export const NOT_TO_BE = 'not to be';

export const PRONOUN_I = 'I';
export const PRONOUN_YUO = 'You';
export const PRONOUN_HE = 'He';
export const PRONOUN_SHE = 'She';
export const PRONOUN_IT = 'It';
export const PRONOUN_WE = 'We';
export const PRONOUN_THEY = 'They';

export const pronounArray: TPronoun[] = [
	PRONOUN_I,
	PRONOUN_YUO,
	PRONOUN_HE,
	PRONOUN_SHE,
	PRONOUN_IT,
	PRONOUN_WE,
	PRONOUN_THEY,
];

export const tenseVerbArray: TTenseVerb[] = [PAST_TENSE, PRESENT_TENSE, FUTURE_TENSE];
export const aspectTenseVerbArray: TAspectTenseVerb[] = [
	TO_BE_ASPECT,
	SIMPLE_ASPECT,
	CONTINUOUS_ASPECT,
	PERFECT_ASPECT,
];
export const typeOfSentenceArray: TTypeOfSentence[] = [
	AFFIRMATIVE_SENTENCE,
	NEGATIVE_SENTENCE,
	QUESTIONS_SENTENCE,
];
export const toBeOrNotToBeArray: TToBeOrNotToBe[] = [TO_BE, NOT_TO_BE];
