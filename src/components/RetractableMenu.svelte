<!---------------------------->
<!---------- SCRIPT ---------->
<!---------------------------->

<script lang="ts">
	
    let previousTop: number = 100000;
    let hideRetractableMenu: boolean = false;
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
            hideRetractableMenu = false;
        } else {
            // go down
            hideRetractableMenu = true;
        }
        previousTop = currentTop;
    }

</script>

<!------------------------------>
<!---------- TEMPLATE ---------->
<!------------------------------>

<svelte:window on:scroll={showHide} />
<div id="retractable_menu" class="retractableMenu" class:retractableMenu--hide={hideRetractableMenu}>
	---------- Retractable menu ----------
</div>

<!--------------------------->
<!---------- STYLE ---------->
<!--------------------------->

<style lang="scss">

    $height: 50px;
    $retractation: -50px;
	
    .retractableMenu {
        position: fixed;
        top: 0px;
        width: 100%;
        height: $height;
        background-color: green;
        transition: transform 1s;
        &--hide {
            transform: translateY($retractation);
        }
    }

</style>