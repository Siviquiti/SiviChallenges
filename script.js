
const startButton = document.getElementById('startButton');
const gameContainer = document.getElementById('game');
const audioClip = document.getElementById('audioClip');
const submitButton = document.getElementById('submitButton');
const artistInput = document.getElementById('artistInput');
const songInput = document.getElementById('songInput');
const timer = document.getElementById('timer');
const resultContainer = document.getElementById('result');
const correctAnswerText = document.getElementById('correctAnswer');

let score = 1000;
let artistGuessedCorrectly = false;
let songGuessedCorrectly = false;
let correctArtist = "";
let correctSong = "";

// Liste des musiques avec artistes et titres
const musicList = [
    { artist: "Adele", song: "Someone Like You", file: "https://www.dropbox.com/scl/fi/n8rrn8lnfm5ih96t4d3k1/Adele-Someone-Like-You.mp3?rlkey=pd2wo12aquk4y5oisryonvdnd&st=va8dsrv2&dl=1" },
    { artist: "Alexandra Stan", song: "Mr Saxobeat", file: "https://www.dropbox.com/scl/fi/lba1xw7a3n3qyk7h0inwm/Alexandra-Stan-Mr-Saxobeat.mp3?rlkey=fgk5fqsgx07v2o02yeqbku3ce&st=8fje6df2&dl=1" },
    { artist: "Alicia Keys", song: "Fallin", file: "https://www.dropbox.com/scl/fi/dqmaw7fn6fcg2a0farrqm/Alicia-Keys-Fallin.mp3?rlkey=xgdf9qp4sb7ok0spgg0m03mim&st=naenk8yt&dl=1" },
    { artist: "Ariana Grande", song: "Dangerous Woman", file: "https://www.dropbox.com/scl/fi/xcacxf4wf62dlgqiixxnn/Ariana-Grande-Dangerous-Woman.mp3?rlkey=5dxjp56xpi19jc8ebxfpexq8v&st=opwdsnwq&dl=1" },
    { artist: "Aurora", song: "Runaway", file: "https://www.dropbox.com/scl/fi/ikwdgng388zuzd1f8sl20/Aurora-Runaway.mp3?rlkey=2n3b6afmrk028ynzrun9d33rp&st=tfzqw522&dl=1" },
    { artist: "Ava Max", song: "Sweet But Psycho", file: "https://www.dropbox.com/scl/fi/id7qsdvaat9frgvkamjyk/Ava-Max-Sweet-But-Psycho.mp3?rlkey=pq1qzu8x4vgs0z6zpbk9aadhd&st=q713e1uq&dl=1" },
    { artist: "Basshunter", song: "Now You're Gone", file: "https://www.dropbox.com/scl/fi/g3x1rym8awq3ff3k8y5yl/Basshunter-Now-You-re-Gone.mp3?rlkey=1zavwz2e1k9gzofmxmczsdnyc&st=6lj8j4o2&dl=1" },
    { artist: "Birdy", song: "Skinny Love", file: "https://www.dropbox.com/scl/fi/40yf21n0f07t9koi7r1u4/Birdy-Skinny-Love.mp3?rlkey=pzlcgi42d0pm12p1dftscv57e&st=5n0pz1ka&dl=1" },
    { artist: "Britney Spears", song: "Work Bitch", file: "https://www.dropbox.com/scl/fi/3qy5lhcjd3ncxlxfhl6jw/Britney-Spears-Work-Bitch.mp3?rlkey=915kh1v0t9er4x98kyeggmkio&st=gkvpzxnf&dl=1" },
    { artist: "Carly Rae Jepsen", song: "Call Me Maybe", file: "https://www.dropbox.com/scl/fi/dn1mrgcr2l9qdeykltmkh/Carly-Rae-Jepsen-Call-Me-Maybe.mp3?rlkey=7u00o57eaym414slxznt0x4kg&st=5bttf4ox&dl=1" },
    { artist: "Cascada", song: "Everytime We Touch", file: "https://www.dropbox.com/scl/fi/n9ik5fwpxerjekntfkqx4/Cascada-Everytime-We-Touch.mp3?rlkey=hhn29ssj2ad9td4lyf4t3otjz&st=t8i6maci&dl=1" },
    { artist: "Charli XCX", song: "Boom Clap", file: "https://www.dropbox.com/scl/fi/x9xnm887ibbwsnbuc5768/Charli-XCX-Boom-Clap.mp3?rlkey=zbhcue3f4scs2amymlt6e9rwm&st=2sn7qu4s&dl=1" },
    { artist: "Christina Aguilera", song: "Hurt", file: "https://www.dropbox.com/scl/fi/nrl512ni9ydov3xcveydm/Christina-Aguilera-Hurt.mp3?rlkey=odcuez1qh1118551hl3dqw2ud&st=xk86wwt3&dl=1" },
    { artist: "Coeur de Pirate", song: "Comme des enfants", file: "https://www.dropbox.com/scl/fi/s8iqp3x5adfytw6g0gl5j/Coeur-de-Pirate-Comme-des-enfants.mp3?rlkey=vibrx3yt9jie14vri3fluva0t&st=s2jf64da&dl=1" },
    { artist: "Dr. Dre", song: "I Need A Doctor", file: "https://www.dropbox.com/scl/fi/8p7k5no772p1yncyuv4do/Dr.-Dre-I-Need-A-Doctor.mp3?rlkey=2fr8j4racrupcbe5jbkuv78px&st=50c4n9xd&dl=1" },
    { artist: "DragonForce", song: "Through the Fire and Flames", file: "https://www.dropbox.com/scl/fi/lbzdgibqij3cdltn9nrww/DragonForce-Through-the-Fire-and-Flames.mp3?rlkey=8od3ft4bja3dlmnhcpdvic343&st=gogroxsh&dl=1" },
    { artist: "Ed Sheeran", song: "Shape of You", file: "https://www.dropbox.com/scl/fi/ykfpvs6syka5to8ye2t9h/Ed-Sheeran-Shape-of-You.mp3?rlkey=yzo0t6eirkka9fznpntnsej7a&st=aj0i6otw&dl=1" },
    { artist: "Eminem", song: "Lose Yourself", file: "https://www.dropbox.com/scl/fi/nekly9v14i690tek7bkx2/Eminem-Lose-Yourself.mp3?rlkey=1tixjgpnkc6shavawdb0okkyx&st=b1fml8ma&dl=1" },
    { artist: "Eminem", song: "Not Afraid", file: "https://www.dropbox.com/scl/fi/kk7ank9ttmp5tb5bnjdk3/Eminem-Not-Afraid.mp3?rlkey=zjzwkgogi2qc01dk6g4rwico7&st=7gaxk2yy&dl=1" },
    { artist: "Fall Out Boy", song: "Dance Dance", file: "https://www.dropbox.com/scl/fi/5corraoikx4a4k38l822z/Fall-Out-Boy-Dance-Dance.mp3?rlkey=ycajqlfjiggj7y6yufr3rus5b&st=w94gtrlf&dl=1" },
    { artist: "Fifth Harmony", song: "Work from Home", file: "https://www.dropbox.com/scl/fi/a296mokzemo37ecdm3y6u/Fifth-Harmony-Work-from-Home.mp3?rlkey=abc13la41h12nxpdogxmy66ff&st=za1fsqjn&dl=1" },
    { artist: "Indila", song: "Dernière Danse", file: "https://www.dropbox.com/scl/fi/u6s06rtxlc3tm3cnugrm2/Indila-Derni-re-Danse.mp3?rlkey=h2reb7n2rf0q1hh57dx4n1v41&st=81wnk8l3&dl=1" },
    { artist: "Inna", song: "Sun is Up", file: "https://www.dropbox.com/scl/fi/b3u92dwpegluecvcwn1hi/Inna-Sun-is-Up.mp3?rlkey=ijrr1yc2s51ysi5wqjzljmb5p&st=mgwtjgv5&dl=1" },
    { artist: "Jeff Buckley", song: "Hallelujah", file: "https://www.dropbox.com/scl/fi/k7m2k8vi0whddl6od08l7/Jeff-Buckley-Hallelujah.mp3?rlkey=7v3bh4lak9i14go17q50h85vv&st=mygtxns9&dl=1" },
    { artist: "Jennifer Lopez", song: "Aint Your Mama", file: "https://www.dropbox.com/scl/fi/dnq3bndhys4fijvil1eqc/Jennifer-Lopez-Aint-Your-Mama.mp3?rlkey=t0vvn9znuh28vxo50ocfmpxye&st=5ro5ur5d&dl=1" },
    { artist: "Jessie J", song: "Price Tag", file: "https://www.dropbox.com/scl/fi/35qc6w67mtu7u4x14jrkj/Jessie-J-Price-Tag.mp3?rlkey=dnpzni9n9l0dkg8gervo2bezf&st=hr1uh1x2&dl=1" },
    { artist: "Jessie J", song: "Who You Are", file: "https://www.dropbox.com/scl/fi/aqweb1tl7eb73sh3532mk/Jessie-J-Who-You-Are.mp3?rlkey=5qkgbpemj0gem97obj8v6prow&st=equwaa36&dl=1" },
    { artist: "Jessie J", song: "Who's Laughing Now", file: "https://www.dropbox.com/scl/fi/crk8g2fdv7mfijpm3k0ar/Jessie-J-Who-s-Laughing-Now.mp3?rlkey=1kltd8jz0p4zfbazvw159ykpl&st=8he69ydj&dl=1" },
    { artist: "John Legend", song: "All of Me", file: "https://www.dropbox.com/scl/fi/wjxthoj7x7lawxy2idsb9/John-Legend-All-of-Me.mp3?rlkey=ctm5qb15f0g23rttd71o941fd&st=bk0yumwm&dl=1" },
    { artist: "Kanye West", song: "All Of The Lights", file: "https://www.dropbox.com/scl/fi/r4vkxop0c8gb4k1zwma6u/Kanye-West-All-Of-The-Lights.mp3?rlkey=3vy4dcfdhznmxii7j4300ry0c&st=vx9ieu6z&dl=1" },
    { artist: "Katy Perry", song: "The One That Got Away", file: "https://www.dropbox.com/scl/fi/yliqyw2py44nhhxjixbbe/Katy-Perry-The-One-That-Got-Away.mp3?rlkey=bcv0scqnr5s8ptyv5ff906xmi&st=avbwe0j2&dl=1" },
    { artist: "Klaas", song: "Our Own Way", file: "https://www.dropbox.com/scl/fi/xo0pxx5t6jwrxpt0p9zbc/Klaas-Our-Own-Way.mp3?rlkey=hi1n9qetxr9cb7lqstsj2mya2&st=5as0sseg&dl=1" },
    { artist: "Lady Gaga", song: "Perfect Illusion", file: "https://www.dropbox.com/scl/fi/kcgtyeqmhsaa66u8k4i3g/Lady-Gaga-Perfect-Illusion.mp3?rlkey=00irfy8i58j3vlozo4tk263qs&st=6pjrwi7l&dl=1" },
    { artist: "Lana Del Rey", song: "Video Games", file: "https://www.dropbox.com/scl/fi/054oz191zqry1zejhrtre/Lana-Del-Rey-Video-Games.mp3?rlkey=g57qb13y6nrx042tngh4bp0x9&st=wf40t5ed&dl=1" },
    { artist: "Lykke Li", song: "I Follow Rivers", file: "https://www.dropbox.com/scl/fi/sqcwvm6vv7ydda8wl4vch/Lykke-Li-I-Follow-Rivers.mp3?rlkey=pyrvb6mtg33s24ukpj9ekocse&st=sn53m8a5&dl=1" },
    { artist: "M.I.A", song: "Paper Planes", file: "https://www.dropbox.com/scl/fi/x6hcqo7k93qa3t3kmij33/M.I.A-Paper-Planes.mp3?rlkey=w9c2hhv2c6b6beb7iaitricqq&st=nls0karo&dl=1" },
    { artist: "Mai Lan", song: "Gentiment Je T'immole", file: "https://www.dropbox.com/scl/fi/amcx1oi30ft3a7s4bzscr/Mai-Lan-Gentiment-Je-T-immole.mp3?rlkey=dnl071n9ya58uv49qbux3cx08&st=4jdb0xbd&dl=1" },
    { artist: "Maroon 5", song: "Girls Like You", file: "https://www.dropbox.com/scl/fi/55ujgtr74a80gdobw3m9i/Maroon-5-Girls-Like-You.mp3?rlkey=rqhgblxi2rj1cigo06jnton8l&st=dt3jhchh&dl=1" },
    { artist: "Martin Garrix & Dua Lipa", song: "Scared To Be Lonely", file: "https://www.dropbox.com/scl/fi/xr7giiigwyry2nb94c0mx/Martin-Garrix-Dua-Lipa-Scared-To-Be-Lonely.mp3?rlkey=2wh6j515y3ukn7jwgvjmxsi1u&st=9sey5j11&dl=1" },
    { artist: "Nicki Minaj", song: "Fly", file: "https://www.dropbox.com/scl/fi/5d3thjmj24vhtdyo9r493/Nicki-Minaj-Fly.mp3?rlkey=7exew43sm48g8ma1mlrogu2ot&st=ihijjc3n&dl=1" },
    { artist: "Nicki Minaj", song: "Super Bass", file: "https://www.dropbox.com/scl/fi/95ph7r1atip265ohiblhv/Nicki-Minaj-Super-Bass.mp3?rlkey=o4wlkx91o681pwzima8qmtwqc&st=g9hdl3fr&dl=1" },
    { artist: "Nirvana", song: "Smells Like Teen Spirit", file: "https://www.dropbox.com/scl/fi/9o1hwe0l8pp642obc1a89/Nirvana-Smells-Like-Teen-Spirit.mp3?rlkey=d88rlmy1yqbxeca8tpokibdkl&st=03gxl7lx&dl=1" },
    { artist: "Olivia Rodrigo", song: "Good 4 u", file: "https://www.dropbox.com/scl/fi/sida0l13f62ec3z4al35r/Olivia-Rodrigo-Good-4-u.mp3?rlkey=1678gu3logw6607wjgvsss07e&st=y6brfdfx&dl=1" },
    { artist: "Pitbull", song: "Timber", file: "https://www.dropbox.com/scl/fi/9jdpykkl8dqvg88jsfr8u/Ram-Jam-Black-Betty.mp3?rlkey=9learnl953ozfzmom1vl5oefr&st=7f930it6&dl=1" },
    { artist: "Ram Jam", song: "Black Betty", file: "https://www.dropbox.com/scl/fi/9jdpykkl8dqvg88jsfr8u/Ram-Jam-Black-Betty.mp3?rlkey=9learnl953ozfzmom1vl5oefr&st=vuft7iph&dl=1" },
    { artist: "Rihanna", song: "Unfaithful", file: "https://www.dropbox.com/scl/fi/tmasmlgbt75b7exfz3t89/Rihanna-Unfaithful.mp3?rlkey=yvyu9svtwb6986uo8zzifqrch&st=n16j6a75&dl=1" },
    { artist: "Selena Gomez", song: "Bad Liar", file: "https://www.dropbox.com/scl/fi/1d2jrocgbsxhsm1rvt3jz/Selena-Gomez-Bad-Liar.mp3?rlkey=n6qzvtlmel3ic8lfdjcabxzz8&st=benuyphp&dl=1" },
    { artist: "Selena Gomez", song: "Good For You", file: "https://www.dropbox.com/scl/fi/2ztcp9snldal4l9wqjhhu/Selena-Gomez-Good-For-You.mp3?rlkey=uq1sgsl0qwfk3qg3xwiq06uz2&st=nodkb3ln&dl=1" },
    { artist: "Selena Gomez", song: "The Heart Wants What It Wants", file: "https://www.dropbox.com/scl/fi/emshkj1yxuowu21pfdwx9/Selena-Gomez-The-Heart-Wants-What-It-Wants.mp3?rlkey=gn3g6kl3q3oj4qb8vaipz59mf&st=y08p760w&dl=1" },
    { artist: "Shakira", song: "Can't Remember to Forget You", file: "https://www.dropbox.com/scl/fi/jbgkcr2v84sf6itlg8io2/Shakira-Can-t-Remember-to-Forget-You.mp3?rlkey=i5m16me761r3h6v8lmfnfzt9e&st=5ycu6358&dl=1" },
    { artist: "Shania Twain", song: "Man ! I Feel Like A Woman", file: "https://www.dropbox.com/scl/fi/n4acsvwvl847kjsatdxfs/Shania-Twain-Man-I-Feel-Like-A-Woman.mp3?rlkey=xdo4k776w006lx138pqsn32es&st=v9t5xe3e&dl=1" },
    { artist: "Sheryfa Luna", song: "Il avait les mots", file: "https://www.dropbox.com/scl/fi/n2cp3sdz4x9wbg61gb14g/Sheryfa-Luna-Il-avait-les-mots.mp3?rlkey=082zw50zwa8rdprav8d5b9tie&st=k028fsmy&dl=1" },
    { artist: "Sia", song: "Chandelier", file: "https://www.dropbox.com/scl/fi/b31kkjdgdldibkbk97mm5/Sia-Chandelier.mp3?rlkey=p21phtg00rxio730w6bje3x78&st=wwmu1mps&dl=1" },
    { artist: "Slipknot", song: "Duality", file: "https://www.dropbox.com/scl/fi/pqt2yiuhuxwt5m2wg6te0/Slipknot-Duality.mp3?rlkey=uyinuz8f64txttdhfgrzs8wyn&st=iy0tktka&dl=1" },
    { artist: "Spice Girls", song: "Wanna Be", file: "https://www.dropbox.com/scl/fi/zc2xspw9sm92ksmnvrdv4/Spice-Girls-Wanna-Be.mp3?rlkey=pe11s8p76c4ty6i1adgu45j7x&st=e6blu70g&dl=1" },
    { artist: "Stromae", song: "Papaoutai", file: "https://www.dropbox.com/scl/fi/sbjp4d5msj62wtw7z16np/Stormae-Papaoutai.mp3?rlkey=brgjbjas0spfhqj4hvbha525w&st=xetwpy13&dl=1" },
    { artist: "Taylor Swift", song: "Blank Space", file: "https://www.dropbox.com/scl/fi/adhyug5fgjagkcejy026f/Taylor-Swift-Blank-Space.mp3?rlkey=6f3n4pxdeh777fyojguq8pf0c&st=v6ad1nmc&dl=1" },
    { artist: "Taylor Swift", song: "I Knew You Were Trouble", file: "https://www.dropbox.com/scl/fi/r0rag9dfsho08sq071lfy/Taylor-Swift-I-Knew-You-Were-Trouble.mp3?rlkey=u4y0tzcm8x74me5tmmtdc3x6d&st=znniix8q&dl=1" },
    { artist: "The Black Eyed Peas", song: "I Gotta Feeling", file: "https://www.dropbox.com/scl/fi/c8ocnejxjatajtivxwyeg/The-Black-Eyed-Peas-I-Gotta-Feeling.mp3?rlkey=172uh4y4mak1hlzwwrdlea97a&st=381qsomb&dl=1" },
    { artist: "The Black Eyed Peas", song: "Meet Me Halfway", file: "https://www.dropbox.com/scl/fi/9nzrhp7837z94etcloh49/The-Black-Eyed-Peas-Meet-Me-Halfway.mp3?rlkey=2bqutyxrs1hjy8yr63r5kg6qg&st=u0zd5elx&dl=1" },
    { artist: "The Black Eyed Peas", song: "Pump It", file: "https://www.dropbox.com/scl/fi/w8jzhue2a9qce846bm7f9/The-Black-Eyed-Peas-Pump-It.mp3?rlkey=iitoktwfb4birw3bkcpc3qp48&st=kopzgv53&dl=1" },
    { artist: "The Buggles", song: "Video Killed the Radio Star", file: "https://www.dropbox.com/scl/fi/4kpznsusj8kkwzyioexgh/The-Buggles-Video-Killed-the-Radio-Star.mp3?rlkey=pnb9eha6einr9vm8t2d4vdxq3&st=8twzw2y1&dl=1" },
    { artist: "The Cranberries", song: "Zombie", file: "https://www.dropbox.com/scl/fi/jws2fdag329ir1e0arb8d/The-Cranberries-Zombie.mp3?rlkey=ijcts33uh0m9vz9z69d2qeyzv&st=qqvksw6m&dl=1" },
    { artist: "The Fray", song: "You Found Me", file: "https://www.dropbox.com/scl/fi/mjic3vasfuch9bjmpdyyv/The-Fray-You-Found-Me.mp3?rlkey=529ye2op8ccbuq67ndmfx7ky5&st=ul8hryq0&dl=1" },
    { artist: "The Pretty Reckless", song: "Heaven Knows", file: "https://www.dropbox.com/scl/fi/z7mnbs2n9c593iwju58ny/The-Pretty-Reckless-Heaven-Knows.mp3?rlkey=utpf2nuwiq2hd9jh7d27yz5yq&st=i9eqlqyq&dl=1" },
    { artist: "The Pretty Reckless", song: "Make Me Wanna Die", file: "https://www.dropbox.com/scl/fi/mu95k2bb6v678kuq1vgtr/The-Pretty-Reckless-Make-Me-Wanna-Die.mp3?rlkey=kh43rpizsz76upifevatb0uyn&st=k5if9v1d&dl=1" },
    { artist: "The Pretty Reckless", song: "Miss Nothing", file: "https://www.dropbox.com/scl/fi/n3aa6yioe1y8awp0se7e9/The-Pretty-Reckless-Miss-Nothing.mp3?rlkey=8hvhdlrh6d6chh5x1oistadge&st=5iykctof&dl=1" },
    { artist: "Yiruma", song: "River Flows In You", file: "https://www.dropbox.com/scl/fi/rv1z3m4lo24zz1dbsxxns/Yiruma-River-Flows-In-You.mp3?rlkey=1ojw9oj3foi3i1souiw2vwvre&st=zfvclshs&dl=1" },
    { artist: "Zara Larsson", song: "Ain't My Fault", file: "https://www.dropbox.com/scl/fi/n59znin2397mkyc5ajcrs/Zara-Larsson-Ain-t-My-Fault.mp3?rlkey=0910h2qxog6jtje1ut02md08r&st=17qijw8s&dl=1" },
    { artist: "Zara Larsson", song: "Lush Life", file: "https://www.dropbox.com/scl/fi/t87q80wdg5og5y4jxnwr0/Zara-Larsson-Lush-Life.mp3?rlkey=mcslfsgnldpsi95yx0n9xy31l&st=os2h51a6&dl=1" },
];

// Fonction pour obtenir l'index de la musique du jour de manière aléatoire
function getMusicForToday() {
    const today = new Date();

    // Utiliser la date actuelle pour générer un nombre aléatoire
    const randomSeed = today.getDate() + today.getMonth() + today.getFullYear(); // Combine le jour, mois et année pour une base stable
    const randomIndex = Math.floor(randomSeed % musicList.length); // Utiliser le modulo pour obtenir un index valide dans la liste

    return musicList[randomIndex];
}

// Fonction de démarrage du jeu
startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    gameContainer.style.display = 'block';
    startGame();
});

function startGame() {
    score = 1000;
    artistGuessedCorrectly = false;
    songGuessedCorrectly = false;
    resultContainer.style.display = 'none';
    artistInput.value = '';
    songInput.value = '';
    artistInput.placeholder = "Entrez l'artiste"; // Réinitialiser le placeholder
    songInput.placeholder = "Entrez le titre"; // Réinitialiser le placeholder

    // Définit la musique du jour
    const musicOfTheDay = getMusicForToday();
    audioClip.src = musicOfTheDay.file;
    correctArtist = musicOfTheDay.artist;
    correctSong = musicOfTheDay.song;

    audioClip.play();
    audioClip.volume = 0.2;
    timer.textContent = `Score : ${score}`;
    timer.style.fontSize = '20px'; // Restaure la taille du score
    startTimer();
}

// Soumettre les réponses de l'utilisateur
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut (rechargement de la page ou autre action)

    const userArtist = normalizeString(artistInput.value.trim());
    const userSong = normalizeString(songInput.value.trim());

    let message = "";

    const isArtistCorrect = userArtist === normalizeString(correctArtist);
    const isSongCorrect = userSong === normalizeString(correctSong);

    if (isArtistCorrect && isSongCorrect) {
        message = `"${correctArtist}" - "${correctSong}" est correct !`;
        showResult(message, true);
        stopTimer();
        timer.style.fontSize = '30px';
        correctAnswerText.style.fontSize = '24px';
        artistInput.style.backgroundColor = 'green';
        songInput.style.backgroundColor = 'green';
        artistInput.disabled = true;
        songInput.disabled = true;
        artistInput.value = "";
        songInput.value = "";
        artistInput.placeholder = "";
        songInput.placeholder = "";

        // Cache les boutons seulement si les deux réponses sont correctes
        submitButton.style.display = 'none';
        abortButton.style.display = 'none';
    } else {
        // Si l'artiste est correct mais pas la chanson
        if (isArtistCorrect && !artistGuessedCorrectly) {
            artistGuessedCorrectly = true;
            message = `"${correctArtist}" est correct !`;
            artistInput.style.backgroundColor = 'green';
            artistInput.disabled = true;
            artistInput.value = "";
            artistInput.placeholder = "";

            // Cacher les boutons si la chanson est aussi correcte après
            if (isSongCorrect) {
                submitButton.style.display = 'none';
                abortButton.style.display = 'none';
            }
        }

        // Si la chanson est correcte mais pas l'artiste
        if (isSongCorrect && !songGuessedCorrectly) {
            songGuessedCorrectly = true;
            message = `"${correctSong}" est correct !`;
            songInput.style.backgroundColor = 'green';
            songInput.disabled = true;
            songInput.value = "";
            songInput.placeholder = "";

            // Cacher les boutons si l'artiste est aussi correct après
            if (isArtistCorrect) {
                submitButton.style.display = 'none';
                abortButton.style.display = 'none';
            }
        }

        // Si ni l'artiste ni la chanson ne sont corrects
        if (!isArtistCorrect && !isSongCorrect) {
            message = "Essayez encore !";
        }

        resultContainer.style.display = 'block';
        correctAnswerText.textContent = message;

        if (artistGuessedCorrectly) {
            artistInput.disabled = true;
        } else {
            artistInput.disabled = false;
        }

        if (songGuessedCorrectly) {
            songInput.disabled = true;
        } else {
            songInput.disabled = false;
        }

        // Si les deux réponses sont correctes après
        if (artistGuessedCorrectly && songGuessedCorrectly) {
            showResult(`Félicitations ! C'était bien ${correctArtist} - ${correctSong} !\nRevenez demain pour un autre extrait !`, true);
            stopTimer();
            timer.style.fontSize = '30px';
            // Cacher les boutons si les deux réponses sont correctes
            submitButton.style.display = 'none';
            abortButton.style.display = 'none';
        }
    }
});

// Fonction pour soumettre les réponses lorsque l'on appuie sur "Entrée"
artistInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche l'action par défaut du "Enter"
        submitButton.click(); // Simule un clic sur le bouton de soumission
    }
});

songInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche l'action par défaut du "Enter"
        submitButton.click(); // Simule un clic sur le bouton de soumission
    }
});

// Fonction pour normaliser les chaînes de caractères et accepter les accents
function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function showResult(message, keepAudio) {
    resultContainer.style.display = 'block';
    correctAnswerText.textContent = message;

    if (!keepAudio) {
        gameContainer.style.display = 'none';
    }
}

const abortButton = document.getElementById('abortButton'); // Bouton abandonner

abortButton.addEventListener('click', function() {
    stopTimer();
    score = 0;
    timer.textContent = 'Score : ' + score;
    resultContainer.style.display = 'block';
    correctAnswerText.innerHTML = `Dommage ! C'était ${correctArtist} - ${correctSong} la bonne réponse ! <br> Revenez demain pour un autre extrait !`;

    artistInput.disabled = true;
    songInput.disabled = true;

    artistInput.value = correctArtist;
    songInput.value = correctSong;

    // Cacher les boutons "Abandonner" et "Soumettre" après un clic sur "Abandonner"
    abortButton.style.display = 'none';
    submitButton.style.display = 'none';
});

// Timer qui diminue le score visuellement de 1 à la fois
let timerInterval;
function startTimer() {
    let actualScore = score;  // Valeur initiale du score
    timerInterval = setInterval(() => {
        if (actualScore > 0) {
            actualScore -= 1;  // Diminue le score de 1 à chaque intervalle
            timer.textContent = 'Score : ' + actualScore;  // Affiche le score mis à jour
        }
    }, 100); // Intervalle de 100 ms pour une mise à jour fréquente du score
}

// Fonction pour arrêter le timer
function stopTimer() {
    clearInterval(timerInterval);
}
