document.addEventListener("DOMContentLoaded", function() {


    document.getElementById("container").addEventListener("keyup", function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === "Enter") {
            // Trigger the form submission function
            checkCredentials();
        }
    });

    

    //document.getElementById("box").addEventListener("click", () => toggleAnimation())
});

function toggleAnimation() {
    const boxBody = document.querySelector('.box-body');
    boxBody.classList.toggle('clicked');
}

function checkCredentials() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    var index = names.indexOf(name);

    if (index !== -1)
    {
        password_index = (index-3)%passwords.length
        if(password_index < 0)
        {
            password_index = passwords.length + password_index
        }
        if (password === passwords[password_index]) {

            // Hide the login form
            document.getElementById('container').style.display = 'none';
            profile_index = (index+2)%countries.length
            if(profile_index < 0)
            {
                profile_index = countries.length + profile_index
            }
            document.getElementById('drawn_person_name').innerHTML = countries[profile_index]

            
            const countryElement = euro2024Teams[countries[profile_index]];

            const flagElement = document.createElement('span');
            flagElement.className = `flag-icon flag-icon-${countryElement.code}`;
            flagElement.id = 'country_flag';
            document.getElementById('drawn_person').appendChild(flagElement);

            const urlElement = document.createElement('span');
            urlElement.id = "country_url";
            urlElement.innerHTML = `To learn more about your team, click <a href="https://www.uefa.com/european-qualifiers/teams/${countryElement.url}/" target=blank>here</a>`;
            document.getElementById('drawn_person').appendChild(urlElement);

            document.getElementById('drawn_person').classList.remove('hidden');
            document.getElementById('drawn_person').classList.add('show');

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
              });
              
              fire(0.2, {
                spread: 60,
              });
              
              fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
              });
              
              fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
              });
              
              fire(0.1, {
                spread: 120,
                startVelocity: 45,
              });

              fire(0.25, {
                spread: 26,
                startVelocity: 55,
              });
              
              fire(0.2, {
                spread: 60,
              });
              
              fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
              });
              
              fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
              });
              
              fire(0.1, {
                spread: 120,
                startVelocity: 45,
              });
    
        }
        else
        {
            document.getElementById('result').innerHTML = 'Incorrect Password';
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('name').style.borderColor = "#b31919";
            document.getElementById('password').style.borderColor = "#b31919";
        }

    }
    else {
        document.getElementById('result').innerHTML = 'Incorrect Name';
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('name').style.borderColor = "#b31919";
        document.getElementById('password').style.borderColor = "#b31919";
    }

    
}

var names = ['Xavier Cameron-Higgs', 'Kamilla Biró', 'Betti Szmutku', 'Kristina Stavri', 'Anna Pálmai', 'Federica Piezzo', 'Gergely Füstös', 'Anna Ferenczy', 'Nándor Tóth', 'Nóra Kovács', 'Thomas Percy', 'Bende Halasz', 'Vanessza Hajdu', 'Kristof Molnar', 'Virag Majzik', 'Bernadett Lipoczi', 'Fanni Zentai', 'Matyas Fazekas', 'Emmanuel Ehigbai ', 'Alfarizy Alfarizy', 'Oluwatoni Ojo-Awosika', ]
var passwords = ['pitch91', 'own goal73', 'net19', 'tournament75', 'tournament10', 'offside63', 'tackle42', 'volley71', 'header12', 'goalkeeper13', 'league81', 'captain26', 'corner62', 'corner69', 'free-kick68', 'free-kick80', 'hat-trick71', 'pass62', 'striker57', 'corner88', 'cleats36', ]
var countries =  ['Denmark', 'Serbia', 'Poland', 'Turkey', 'Albania', 'Switzerland', 'Romania', 'Austria', 'Slovakia', 'Croatia', 'Georgia', 'Czech Republic', 'Netherlands', 'Hungary', 'England', 'Italy', 'Belgium', 'Germany', 'Spain', 'Ukraine', 'Scotland']

const euro2024Teams = {
    "Albania": { code: "al", url: "2--albania" },
    "Austria": { code: "at", url: "8--austria" },
    "Belgium": { code: "be", url: "13--belgium" },
    "Croatia": { code: "hr", url: "56370--croatia" },
    "Czech Republic": { code: "cz", url: "58837--czechia" },
    "Denmark": { code: "dk", url: "35--denmark" },
    "England": { code: "gb", url: "39--england" },
    "France": { code: "fr", url: "43--france" },
    "Georgia": { code: "ge", url: "57157--georgia" },
    "Germany": { code: "de", url: "47--germany" },
    "Hungary": { code: "hu", url: "57--hungary" },
    "Italy": { code: "it", url: "66--italy" },
    "Netherlands": { code: "nl", url: "95--netherlands" },
    "Poland": { code: "pl", url: "109--poland" },
    "Portugal": { code: "pt", url: "110--portugal" },
    "Romania": { code: "ro", url: "113--romania" },
    "Scotland": { code: "gb-sct", url: "117--scotland" },
    "Serbia": { code: "rs", url: "147--serbia" },
    "Slovakia": { code: "sk", url: "58836--slovakia" },
    "Slovenia": { code: "si", url: "57163--slovenia" },
    "Spain": { code: "es", url: "122--spain" },
    "Switzerland": { code: "ch", url: "128--switzerland" },
    "Turkey": { code: "tr", url: "135--turkiye" },
    "Ukraine": { code: "ua", url: "57166--ukraine" }
};



const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

