const names = ['Xavier Cameron-Higgs', 'Kamilla Biró', 'Anna Pálmai', 'Federica Piezzo', 'Gergely Füstös', 'Anna Ferenczy', 'Nóra Kovács', 'Bende Halasz', 'Vanessza Hajdu', 'Kristof Molnar', 'Virag Majzik', 'Bernadett Lipoczi', 'Fanni Zentai', 'Kristina Stavri', 'Emmanuel Ehigbai', 'Alfarizy Alfarizy', 'Oluwatoni Ojo-Awosika', 'Kálai Gábor', 'Németh Erik', 'Kovács Botond', 'Eőri Panna', 'Kutak Borbála', 'Ngan Pham', 'Ei Yamin Oo'];
const passwords = ['nutmeg29', 'pass28', 'referee53', 'goal35', 'hat-trick28', 'foul57', 'striker19', 'volley33', 'captain12', 'cleats16', 'tactics89', 'fans32', 'cleats73', 'goalkeeper10', 'formation74', 'nutmeg57', 'goalkeeper38', 'striker69', 'defense35', 'striker59', 'tactics48', 'volley43', 'kit13', 'injury78'];
var countries = ['Spain', 'Portugal', 'Ukraine', 'Albania', 'Denmark', 'Belgium', 'Italy', 'Croatia', 'Romania', 'Hungary', 'Germany', 'France', 'Serbia', 'England', 'Netherlands', 'Turkey', 'Czech Republic', 'Georgia', 'Scotland', 'Switzerland', 'Austria', 'Slovenia', 'Slovakia', 'Poland'];

const euro2024Teams = {
    "Albania": { code: "al", url: "2--albania", rank: "Top 24", cards: "7", worst: "-2" },
    "Austria": { code: "at", url: "8--austria", rank: "Top 16", cards: "12", worst: "1" },
    "Belgium": { code: "be", url: "13--belgium", rank: "Top 16", cards: "8", worst: "0" },
    "Croatia": { code: "hr", url: "56370--croatia", rank: "Top 24", cards: "7", worst: "-3" },
    "Czech Republic": { code: "cz", url: "58837--czechia", rank: "Top 24", cards: "15", worst: "-2" },
    "Denmark": { code: "dk", url: "35--denmark", rank: "Top 16", cards: "9", worst: "-2" },
    "England": { code: "gb-eng", url: "39--england", rank: "2", cards: "14", worst: "2" },
    "France": { code: "fr", url: "43--france", rank: "Top 4", cards: "9", worst: "1" },
    "Georgia": { code: "ge", url: "57157--georgia", rank: "Top 16", cards: "7", worst: "-3" },
    "Germany": { code: "de", url: "47--germany", rank: "Top 8", cards: "14", worst: "7" },
    "Hungary": { code: "hu", url: "57--hungary", rank: "Top 24", cards: "10", worst: "-3" },
    "Italy": { code: "it", url: "66--italy", rank: "Top 16", cards: "10", worst: "-2" },
    "Netherlands": { code: "nl", url: "95--netherlands", rank: "Top 4", cards: "11", worst: "3" },
    "Poland": { code: "pl", url: "109--poland", rank: "Top 24", cards: "8", worst: "-3" },
    "Portugal": { code: "pt", url: "110--portugal", rank: "Top 8", cards: "5", worst: "2" },
    "Romania": { code: "ro", url: "113--romania", rank: "Top 16", cards: "9", worst: "-2" },
    "Scotland": { code: "gb-sct", url: "117--scotland", rank: "Top 24", cards: "6", worst: "-5" },
    "Serbia": { code: "rs", url: "147--serbia", rank: "Top 24", cards: "9", worst: "-1" },
    "Slovakia": { code: "sk", url: "58836--slovakia", rank: "Top 16", cards: "8", worst: "-1" },
    "Slovenia": { code: "si", url: "57163--slovenia", rank: "Top 16", cards: "12", worst: "0" },
    "Spain": { code: "es", url: "122--spain", rank: "1", cards: "17", worst: "11" },
    "Switzerland": { code: "ch", url: "128--switzerland", rank: "Top 8", cards: "10", worst: "4" },
    "Turkey": { code: "tr", url: "135--turkiye", rank: "Top 8", cards: "21", worst: "0" },
    "Ukraine": { code: "ua", url: "57166--ukraine", rank: "Top 24", cards: "3", worst: "-2" }
};

const tbody = document.querySelector('tbody');

function populateTable() {
    let bestRank = { index: 2, value: Infinity }; // 'rank' column
    let highestCards = { index: 3, value: -Infinity }; // 'cards' column
    let lowestWorst = { index: 4, value: Infinity }; // 'worst' column
    
    // First pass to identify the highest values
    names.forEach((name, index) => {
        let county_index = (index + 2) % passwords.length;
        if (county_index < 0) {
            county_index = passwords.length + county_index;
        }

        const countryElement = euro2024Teams[countries[county_index]];
        
        let rankValue = parseFloat(countryElement.rank.replace("Top ", ""));
        let cardsValue = parseFloat(countryElement.cards);
        let worstValue = parseFloat(countryElement.worst);
        
        if (rankValue < bestRank.value) bestRank = { index, value: rankValue };
        if (cardsValue > highestCards.value) highestCards = { index, value: cardsValue };
        if (worstValue < lowestWorst.value) lowestWorst = { index, value: worstValue };
    });

    // Second pass to populate the table and apply highlights
    names.forEach((name, index) => {
        let county_index = (index + 2) % passwords.length;
        if (county_index < 0) {
            county_index = passwords.length + county_index;
        }

        const countryElement = euro2024Teams[countries[county_index]];

        const flagElement = document.createElement('span');
        flagElement.className = `flag-icon flag-icon-${countryElement.code}`;
        flagElement.id = 'country_flag';

        const tr = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;

        const countryCell = document.createElement('td');
        countryCell.appendChild(flagElement);
        countryCell.append(` ${countries[county_index]}`);

        const rankCell = document.createElement('td');
        rankCell.textContent = countryElement.rank;
        if (index === bestRank.index) rankCell.classList.add('highlight');

        const cardsCell = document.createElement('td');
        cardsCell.textContent = countryElement.cards;
        if (index === highestCards.index) cardsCell.classList.add('highlight');

        const worstCell = document.createElement('td');
        worstCell.textContent = countryElement.worst;
        if (index === lowestWorst.index) worstCell.classList.add('highlight');

        tr.appendChild(nameCell);
        tr.appendChild(countryCell);
        tr.appendChild(rankCell);
        tr.appendChild(cardsCell);
        tr.appendChild(worstCell);

        tbody.appendChild(tr);
    });
}

// Initial population of the table
populateTable();

let ascending = true;

// Function to sort table rows
function sortTable(category) {
    console.log(category, ascending);
    const tableBody = document.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    // Determine the index of the category in the table header
    let categoryIndex;
    document.querySelectorAll('th').forEach((th, index) => {
        if (th.textContent.trim() === category) {
            categoryIndex = index;
        }
    });

    // Sorting direction tracking
    
    rows.sort((rowA, rowB) => {
        let valueA = rowA.querySelectorAll('td')[categoryIndex].textContent.trim();
        let valueB = rowB.querySelectorAll('td')[categoryIndex].textContent.trim();

        valueA = valueA.replace("Top ", "");
        valueB = valueB.replace("Top ", "");

        // For numeric sorting
        if (!isNaN(valueA) && !isNaN(valueB)) {
            valueA = parseFloat(valueA);
            valueB = parseFloat(valueB);
        }

        // Determine sort order
        if (ascending) {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });

    // Clear table and append sorted rows
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));

    // Toggle sort direction for next click
    ascending = !ascending;
}

// Event listeners for header clicks to trigger sorting
document.querySelectorAll('th').forEach(header => {
    sortTable("Name");
    header.addEventListener('click', () => {
        const category = header.textContent.trim();
        sortTable(category);
    });
});
