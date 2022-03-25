<!---------------------------->
<!---------- SCRIPT ---------->
<!---------------------------->

<script lang="ts">
	
    let previousTop: number = 100000;
    let decreaseMenu: boolean = false;
    const startDecrease: number = 100;

    /**
     * Détection du sens du scroll
     * Si vers le haut alors afficher le sous-menu
     * Si vers le vas alors masquer le sous-menu
     */
     function expandDecrease() {
        var currentTop = window.scrollY;
        if (currentTop < previousTop || currentTop < startDecrease) {
            // go up
            decreaseMenu = false;
        } else {
            // go down
            decreaseMenu = true;
        }
        previousTop = currentTop;
    }

</script>

<!------------------------------>
<!---------- TEMPLATE ---------->
<!------------------------------>

<svelte:window on:scroll={expandDecrease} />
<div id="menu_decrease" class="menuDecrease" class:menuDecrease--decrease={decreaseMenu}>
    <div class="menuDecrease__logo"><img class="menuDecrease__logo__img" src="../images/logo.svg" alt="logo"></div>
    <ul class="menuDecrease__ul">
        <li class="menuDecrease__ul__li">Menu A</li>
        <li class="menuDecrease__ul__li">Menu B</li>
        <li class="menuDecrease__ul__li">Menu C</li>
        <li class="menuDecrease__ul__li">Menu D</li>
        <li class="menuDecrease__ul__li">Menu E</li>
    </ul>
</div>

<!--------------------------->
<!---------- STYLE ---------->
<!--------------------------->

<style lang="scss">

    $height: 200px; // utiliser une variable globale $header_height
    $decrease: -130px;
	
    .menuDecrease {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: $header_height;
        background-color: green;
        transition: transform 1s;
        &__logo {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            width: 100%;
            margin: 16px 0 16px 0;
            &__img {
                width: 100px;
                height: 100px;
            }
        }
        &__ul {
            padding: 0;
            margin: 16px 0 16px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            &__li {
                display: inline;
            }
        }
        &--decrease {
            transform: translateY($decrease);
        }
    }

</style>