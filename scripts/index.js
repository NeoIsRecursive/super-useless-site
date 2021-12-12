//Slå till 12. Det gäller att slå exakt 12 poäng på 3 slag.
//Om ingen lyckas slå till 12 på 3 kast börjar spelet om igen.
//Får fler 12 i samma omgång får de antingen slå om alla 3 slagen
//eller tävla om vem som får högst poäng på ett slag.

document.querySelector(".newPlayerBtn").addEventListener("click", () => {
  createPlayer();
});

document.querySelector(".about-btn").addEventListener("click", () => {
  openContainer(
    "<h2>About</h2><p>every second a 'player' rolls their dice and everything is calculated, you can use TAB to go trough 'players' and ENTER to roll for them.</p><p>Every time you vist the site a random number of players is created and you cannot create more</p>"
  );
});

createPlayers(Math.floor(Math.random() * 100));
autoPlay();
