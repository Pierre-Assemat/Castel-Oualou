<template>
  <div id="home">
    <section class="flex-row-sb section-1">
      <div class="image-container">
        <img src="assets/wine_glasses.png" alt="wine glasses"/>
      </div>
      <div class="text-bloc flex-col-c">
        <p class="body">
          Un savoir-faire de vigneron indépendant transmis de génération en génération pour une production de qualité.
        </p>
        <p class="body">
          Situé à Roquemaure et Saint Laurent des Arbres, au cœur de l’appellation LIRAC un terroir d’argile
          rouge à galets roulés, de côteaux secs et rocailleux, d’éboulis calcaires, pour le Domaine des
          Causses et Saint Eynes, Argilo sableux pour le Domaine de Castel Oualou et le Domaine des
          Garrigues.
        </p>
      </div>
      <!-- <div class="image-container">
        <img class="reverse-img" src="assets/wine_glasses.png" alt="wine glasses"/>
      </div> -->
    </section>

    <section class="flex section-2" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="text-bloc flex-col-c blur">
        <p class="body">
          Plus de 90 hectares de vignes classées en Appellation Lirac et Côtes du Rhône exposition Nord –
          Sud répartis sur trois Domaines :
          <ul>
            <li>Le Domaine des Garrigues - 6 hectares</li>
            <li>Le Domaine des Causses et Saint Eynes - 32 hectares</li>
            <li>Le Domaine de Castel Oualou - 52 hectares.</li>
          </ul>
        </p>


      </div>
      <!-- <img class="" src="assets/background/vineyard.png" alt="vineyard"/> -->
    </section>

    <p class="body">
      Lutte raisonnée et Travail du sol par respect de l’environnement.
    </p>

    <p class="body">
      Lors des vendanges, chaque cépage est ramassé séparément en fonction de la maturité. Certains
      d’entre eux sont assemblés avant fermentation.
    </p>

    <p class="body">
      L’âge moyen des vignes est de 40 ans.
    </p>

    <img src="assets/castel.png" alt="the castel" width="100%"/>

  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      backgroundImage: 'assets/background/vineyard.jpg'
    }
  },
}
</script>

<style scoped lang="scss">
  .reverse-img {
    transform: scaleX(-1);
  }

  .section-1 {
    min-height: 400px;
    background-color: $background-color;
  }

  .section-2 {
    min-height: 400px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  .text-bloc {
    color: $black;
    max-width: 500px;
    padding: 0 $margin-larger;
    margin: $margin-larger $margin-largest;
    border-radius: $border-radius;

    & > p {
      margin: $margin-large;
      text-align: justify;
    }
  }

  .image-container {
    max-width: 40%;

    & > img {
      width: 100%;
      height: auto;
    }
  }

  .blur {
    backdrop-filter: blur(15px);
    background: $black-lightest;
  }
</style>
