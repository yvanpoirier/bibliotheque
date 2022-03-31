<!---------------------------->
<!---------- SCRIPT ---------->
<!---------------------------->

<script lang="ts">
	
</script>

<!------------------------------>
<!---------- TEMPLATE ---------->
<!------------------------------>

<div class="parallax">

<div id="title" class="slide header">
    <h1>Pure CSS Parallax</h1>
</div>

<div id="slide1" class="slide">
    <div class="title">
        <h1>Slide 1</h1>
        <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
    </div>
</div>

<div id="slide2" class="slide">
    <div class="title">
        <h1>Slide 2</h1>
        <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
    </div>
    <img src="https://picsum.photos/640/480?random=1" alt="carte une">
    <img src="https://picsum.photos/640/480?random=2" alt="carte deux"> 
</div>

<div id="slide3" class="slide">
    <div class="title">
        <h1>Slide 3</h1>
        <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
    </div>
</div>

<div id="slide4" class="slide header">
    <h1>The End</h1>
</div>

</div>

<!--------------------------->
<!---------- STYLE ---------->
<!--------------------------->

<style lang="scss">

    // Conteneur sur lequel est posé la perspective
    // Ces propriétés peuvent être positionnées sur le body.
    // Dans ce cas le conteneur doit hériter du transform-style parent (cf. :global(body))
    .parallax {
        margin:0;
        padding:0;
        perspective: 1px; // distance entre l'utilisateur et le plan d'équation z = 0
        // Les parties des éléments 3D qui se situent derrière l'utilisateur 
        // (c'est-à-dire ceux pour lesquels leur coordonnée en z est plus grande que 
        // la valeur de la propriété perspective) ne sont pas dessiné
        // scale = (perspective / (perspective -  translateZ))
        // translateZ = (perspective * (scale - 1)) / scale

        transform-style: preserve-3d;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        font-family: Nunito;
    }

    // Avec propriétés sur le body et héritage
    // :global(body) { 
    //     margin:0;
    //     padding:0;
    //     perspective: 1px;
    //     transform-style: preserve-3d;
    //     height: 100%;
    //     overflow-y: scroll;
    //     overflow-x: hidden;
    //     font-family: Nunito;
    // }
    // .parallax {
    //        transform-style: inherit;
    //}

    @import url(https://fonts.googleapis.com/css?family=Nunito);

    :global(html) {
        height: 100%;
        overflow: hidden;
    }


    h1 {
        font-size: 250%
    }

    p {
        font-size: 140%;
        line-height: 150%;
        color: #333;
    }

    .slide {
        position: relative; // garde sa position dans le flux malgré le décalage top-left-bottom-right
        padding: 25vh 10%;
        min-height: 100vh;
        width: 100vw;
        box-sizing: border-box; // prise en compte bordure et padding dans la taille de la boîte
        box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
        transform-style: inherit; // hérite de l'espace tridimensionnel du body
    }

    img {
        position: absolute;
        top: 50%;
        left: 35%;
        width: 320px;
        height: 240px;
        transform: translateZ(.25px) scale(.75) translateX(-94%) translateY(-100%) rotate(2deg);
        padding: 10px;
        border-radius: 5px;
        background: rgba(240,230,220, .7);
        box-shadow: 0 0 8px rgba(0, 0, 0, .7);
    }

    img:last-of-type {
        transform: translateZ(.4px) scale(.6) translateX(-104%) translateY(-40%) rotate(-5deg);
    }

    .slide:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, .7);
    }

    .title {
        width: 50%;
        padding: 5%;
        border-radius: 5px;
        background: rgba(240,230,220, .7);
        box-shadow: 0 0 8px rgba(0, 0, 0, .7);
    }

    .slide:nth-child(2n) .title {
        margin-left: 0;
        margin-right: auto;
    }

    .slide:nth-child(2n+1) .title {
        margin-left: auto;
        margin-right: 0;
    }

    .slide, .slide:before {
        background: 50% 50% / cover;  
    }

    .header {
        text-align: center;
        font-size: 175%;
        color: #fff;
        text-shadow: 0 2px 2px #000;
    }

    #title {
        background-image: url("https://picsum.photos/640/480?random=3");
        z-index:2;
    }

    #title h1 {
        transform: translateZ(.25px) scale(.75);
        transform-origin: 50% 100%;
    }

    #slide1:before {
        background-image: url("https://picsum.photos/640/480?random=4");
        transform: translateZ(-1px) scale(2);
    }

    #slide2 {
        background-image: url("https://picsum.photos/640/480?random=5");
        z-index:2;
    }

    #slide3:before {
        background-image: url("https://picsum.photos/640/480?random=6");
        transform: translateZ(-1px) scale(2);
    }

    #slide4 {
        background: #222;
    }

</style>