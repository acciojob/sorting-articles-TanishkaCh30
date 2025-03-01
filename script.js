let ul = document.getElementById("band");

const bands = ['The Plot in You', 'The Devil Wears Prada',
			   'Pierce the Veil', 'Norma Jean', 'The Bled', 
			   'Say Anything', 'The Midway State', 'We Came as Romans',
			   'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
			   'Anywhere But Here', 'An Old Dog'];


function sortBands(bands) {
            return bands.sort((a, b) => {
                const cleanA = a.replace(/^(a |an |the )/i, '').trim();
                const cleanB = b.replace(/^(a |an |the )/i, '').trim();
                return cleanA.localeCompare(cleanB);
            });
        }

        const sortedBands = sortBands(bands);
       

        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            ul.appendChild(li);
        });