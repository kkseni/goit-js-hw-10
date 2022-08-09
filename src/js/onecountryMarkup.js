export const oneCountryMarkup = (data) => data.map(({ flags, name, capital, population, lenguages}) =>
`<img src="${flags.svg}" class="avatar" alt="flag" width="30" />
<span class='title'>${name.official}</span>
<ul class='text'>
<li>Capital: <span class='text__normal'>${capital}</span></li>
<li>Population: <span class='text__normal'>${population}</span></li>
<li>Lenguages:<span class='text__normal'>${lenguages}</span></li>
</ul>`)
