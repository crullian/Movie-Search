import {useRef} from 'react';

const SearchPage = ({onHandleSearch}) => {
	const inputRef = useRef('');
	const handleSearch = (e) => {
		const searchTerm = inputRef.current.value;
		return onHandleSearch(searchTerm);
	}

	return (
		<>
			<input type="text" ref={inputRef} />
			<button onClick={handleSearch}>search</button>
		</>
	);
}

export default SearchPage;
