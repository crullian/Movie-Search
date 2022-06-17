const ResultsPage = ({results}) => {
	console.log('RESULTS are in', results)
	return (
		<>
			<p>ResultsPage</p>
			{results && results.map(result => <p key={result.imdbID}>{result.Title}</p>)}
			<a href="/search">back to search page</a>
		</>
	)
}

export default ResultsPage;
