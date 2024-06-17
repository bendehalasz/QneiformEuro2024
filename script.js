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

            
            const countryCode = euro2024Teams[countries[profile_index]];
            const flagElement = document.createElement('span');
            flagElement.className = `flag-icon flag-icon-${countryCode}`;
            flagElement.id = 'country_flag';
            document.getElementById('drawn_person').appendChild(flagElement);

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

var names = ['Xavier Cameron-Higgs', 'Kamilla Biró', 'Eszter Lőrincz', 'Betti Szmutku', 'Kristina Stavri', 'Anna Pálmai', 'Federica Piezzo', 'Gergely Füstös', 'Anna Ferenczy', 'Nándor Tóth', 'Nóra Kovács', 'Thomas Percy', 'Bence Bíró', 'Bende Halasz', ]
var passwords = ['hat-trick22', 'extra time35', 'free-kick24', 'referee31', 'tactics69', 'tackle94', 'header13', 'celebration53', 'champion57', 'goalkeeper88', 'fans67', 'team57', 'offside60', 'assist24', ]
var countries =  ['Czech Republic', 'Turkey', 'Slovenia', 'Scotland', 'Poland', 'Portugal', 'Hungary', 'Denmark', 'Romania', 'Netherlands', 'Serbia', 'Slovakia', 'Switzerland', 'Croatia']

const euro2024Teams = {
    "Albania": "al",
    "Austria": "at",
    "Belgium": "be",
    "Croatia": "hr",
    "Czech Republic": "cz",
    "Denmark": "dk",
    "England": "gb",
    "France": "fr",
    "Georgia": "ge",
    "Germany": "de",
    "Hungary": "hu",
    "Italy": "it",
    "Netherlands": "nl",
    "Poland": "pl",
    "Portugal": "pt",
    "Romania": "ro",
    "Scotland": "gb-sct",
    "Serbia": "rs",
    "Slovakia": "sk",
    "Slovenia": "si",
    "Spain": "es",
    "Switzerland": "ch",
    "Turkey": "tr",
    "Ukraine": "ua"
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
