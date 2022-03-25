<!---------------------------->
<!---------- SCRIPT ---------->
<!---------------------------->

<script lang="ts">
	
    let previousTop: number = 100000;
    let hideMenuRetractable: boolean = false;
    const startRetractation: number = 100;

    /**
     * Détection du sens du scroll
     * Si vers le haut alors afficher le sous-menu
     * Si vers le vas alors masquer le sous-menu
     */
     function showHide() {
        var currentTop = window.scrollY;
        if (currentTop < previousTop || currentTop < startRetractation) {
            // go up
            hideMenuRetractable = false;
        } else {
            // go down
            hideMenuRetractable = true;
        }
        previousTop = currentTop;
    }

</script>

<!------------------------------>
<!---------- TEMPLATE ---------->
<!------------------------------>

<svelte:window on:scroll={showHide} />
<div id="menu_retractable" class="menuRetractable" class:menuRetractable--hide={hideMenuRetractable}>
	-------------- Menu Retractable --------------<br>
    -------------- Start after {startRetractation} pixels --------------
</div>

<!--------------------------->
<!---------- STYLE ---------->
<!--------------------------->

<style lang="scss">

    $height: 50px; // utiliser une variable globale $header_height
    $retractation: -50px;
	
    .menuRetractable {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: $height;
        background-color: green;
        color: yellow;
        transition: transform 1s;
        &--hide {
            transform: translateY($retractation);
        }
    }

</style>