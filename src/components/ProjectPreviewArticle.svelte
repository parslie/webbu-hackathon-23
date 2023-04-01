<script lang="ts">
    export let style = "";
    export let onClick: (e: any) => void;
</script>

<article on:click={onClick} on:keydown={() => console.log("test")} style={style}>
    <slot />
</article>

<style lang="scss">
    @import "../variables.scss";
    @import "../default.scss";

    article {
        padding: $medium-size;
        border-radius: $medium-size;
        background: $black;
        color: $white;
    }
</style>